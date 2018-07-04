import React, { PureComponent, Fragment } from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import { DateTimePicker } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';

//helper function
function formatDate(str) {
	return str
		.split(/[.|T]/)
		.slice(0, 2)
		.join(' ');
}

export default class CustomDateTimePicker extends PureComponent {
	state = {
		fromDate: '2018-07-01T12:00:00.000Z',
		toDate: '2018-07-01T13:00:00.000Z'
	};

	handleFromDateChange = date => {
		this.setState({ fromDate: date.toISOString() });
	};

	handleToDateChange = date => {
		console.log(date.toISOString());
		this.setState({ toDate: date.toISOString() });
	};

	onSearchByDate = () => {
		const { locationData, fetchVesselLocations } = this.props;
		const { fromDate, toDate } = this.state;

		let code = 'imo';
		if (locationData.imoOrMmsi.length === 9) {
			code: 'mmsi';
		}
		const payload = {
			code: code,
			codeNumber: locationData.imoOrMmsi,
			prelastTimestamp: formatDate(fromDate),
			lastTimestamp: formatDate(toDate)
		};
		this.props.fetchVesselLocations(payload);
	};

	render() {
		const { fromDate, toDate } = this.state;

		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Fragment>
					<div className="picker">
						<DateTimePicker
							value={fromDate}
							onChange={this.handleFromDateChange}
							label="From"
						/>
					</div>
					<div className="picker">
						<DateTimePicker
							value={toDate}
							onChange={this.handleToDateChange}
							label="To"
						/>
					</div>
				</Fragment>
				<Button
					onClick={this.onSearchByDate}
					variant="contained"
					color="default"
					style={{ margin: '10px 0 10px 0' }}>
					Search this date
				</Button>
			</MuiPickersUtilsProvider>
		);
	}
}
