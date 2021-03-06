const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

/*
	fetches every location of a vessel in a specific window time
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
