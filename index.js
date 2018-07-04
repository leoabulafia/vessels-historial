const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//get every location of a vessel
// app.get('/api/vessellocations', (req, res) => {
// 	request.get(
// 		`https://services.marinetraffic.com/api/exportvesseltrack/${
// 			keys.aisApi
// 		}/v:2/imo:9241786/days:1/protocol:jsono`,
// 		(err, response, body) => {
// 			if (!err && response.statusCode == 200) {
// 				res.send(JSON.parse(body));
// 			}
// 		}
// 	);
// });

/*
	to avoid the cost of fetching every location on a day, just
	fetches last 6 minutes locations of a vessel and returns only the last one
*/

app.post('/api/vessellocations', (req, res) => {
	const { code, codeNumber, lastTimestamp, prelastTimestamp } = req.body;
	console.log(req.body);
	request.get(
		`https://services.marinetraffic.com/api/exportvesseltrack/${
			keys.aisApi
		}/v:2/${code}:${codeNumber}/fromdate:${prelastTimestamp}/todate:${lastTimestamp}/protocol:jsono`,
		(err, response, body) => {
			if (!err && response.statusCode == 200) {
				res.send(JSON.parse(body));
			}
		}
	);
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
