/*
	This component renders a short description of the app, and display buttons to fetch
	vessel locations as an example.
*/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//styles
import howToUseStyles from 'styles/howToUseStyles';

//helper functions
//creates a string date to pass to the action and construct the url for the request
const createStringDate = minutes => {
	return new Date(Date.now() - minutes * 60000)
		.toISOString()
		.split(/[.|T]/)
		.slice(0, 2)
		.join(' ');
};

//onFetchVessellocations takes some imo numbers of known vessels to show examples
class HowToUse extends React.Component {
	onFetchVessellocations = imo => () => {
		const payload = {
			code: 'imo',
			codeNumber: imo,
			prelastTimestamp: createStringDate(60),
			lastTimestamp: createStringDate(0)
		};
		this.props.setMilliseconds(1000 * 60 * 60);
		this.props.fetchVesselLocations(payload);
		this.props.saveImoOrMmsi(imo);
	};
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.buttonsContainer}>
				<Typography variant="title" color="inherit">
					With this app you can search for vessels and fetch their position and
					routes historically.
				</Typography>
				<div>
					<Button
						onClick={this.onFetchVessellocations(9241786)}
						variant="outlined"
						className={classes.button}
						color="primary">
						Blue Star Naxos
					</Button>
					<Button
						onClick={this.onFetchVessellocations(9208679)}
						variant="outlined"
						className={classes.button}
						color="secondary">
						Nissos Mykonos
					</Button>
					<Button
						onClick={this.onFetchVessellocations(8632146)}
						variant="outlined"
						className={classes.button}>
						Express Skopelitis
					</Button>
					<Button
						onClick={this.onFetchVessellocations(9565041)}
						variant="outlined"
						className={classes.button}
						color="primary">
						Blue Star Patmos
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(howToUseStyles, { withTheme: true })(HowToUse);
