/*
	This component will display information and options at on the left of the map.
	It uses conditional rendering and change info displayed dynamically
*/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//styles
import infoDataStyles from 'styles/infoDataStyles';
//components
import Calendar from 'components/Calendar';

class InfoData extends React.Component {
	onToggleMarkersLines = () => {
		this.props.toggleMarkersLine();
	};
	render() {
		const {
			classes,
			fetchVesselLocations,
			locationData,
			vesselLocations
		} = this.props;
		const displayCorrectButton = locationData.displayLine ? (
			<Button
				onClick={this.onToggleMarkersLines}
				variant="contained"
				color="secondary">
				See Track Markers
			</Button>
		) : (
			<Button
				onClick={this.onToggleMarkersLines}
				variant="contained"
				color="primary">
				See Track Line
			</Button>
		);

		const displayExamples =
			vesselLocations.length === 0 ? (
				<div>
					<Typography variant="subheading" gutterBottom>
						Search in the bar by IMO or MMSI. If a vessel is found, the last
						hour location or route will be displayed on the map and you will
						have options to look for details.
					</Typography>
					<Typography variant="title">
						Or click an example above to see action!
					</Typography>
				</div>
			) : (
				<div className={classes.container}>
					<Typography variant="subheading" gutterBottom>
						This is the vessel's last hour location
					</Typography>
					{displayCorrectButton}
					<Typography variant="subheading" gutterBottom>
						Search historial for specific date
					</Typography>
					<Calendar
						fetchVesselLocations={fetchVesselLocations}
						locationData={locationData}
					/>
				</div>
			);

		return <div>{displayExamples}</div>;
	}
}

export default withStyles(infoDataStyles, { withTheme: true })(InfoData);
