/*
	This component is the top bar of the layout. It contains a text on the left,
	and a search bar on the right.
*/

import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
//material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//components
import SearchField from 'components/SearchField';

//helper functions

//creates a string date to pass to the action and construct the url for the request
const createStringDate = minutes => {
	return new Date(Date.now() - minutes * 60000)
		.toISOString()
		.split(/[.|T]/)
		.slice(0, 2)
		.join(' ');
};

class TopBar extends React.Component {
	render() {
		const {
			classes,
			error,
			fetchVesselLocations,
			handleSubmit,
			reset,
			saveImoOrMmsi
		} = this.props;
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit" className={classes.flex}>
						Vessels on waters historial
					</Typography>
					<form
						onSubmit={handleSubmit(data => {
							let code;
							if (data.searchVessel.length === 7) {
								code = 'imo';
							} else if (data.searchVessel.length === 9) {
								code = 'mmsi';
							}
							const payload = {
								code: code,
								codeNumber: data.searchVessel,
								prelastTimestamp: createStringDate(60),
								lastTimestamp: createStringDate(0)
							};
							saveImoOrMmsi(data.searchVessel);
							reset();
							return fetchVesselLocations(payload);
						})}>
						<Field type="text" component={SearchField} name="searchVessel" />
						{error && <strong>{error}</strong>}
					</form>
				</Toolbar>
			</AppBar>
		);
	}
}

export default reduxForm({
	form: 'searchVessel'
})(TopBar);
