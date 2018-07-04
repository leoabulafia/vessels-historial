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
import InfoWindow from 'components/InfoWindow';

class InfoData extends React.Component {
	onToggleMarkersLines = () => {
		this.props.toggleMarkersLine();
	};
	onTogglePlay = () => {
		this.props.togglePlay();
	};
	render() {
		const {
			classes,
			fetchVesselLocations,
			info,
			locationData,
			vesselLocations
		} = this.props;
		const displayInfoWindow = locationData.displayLine ? (
			<div>
				<Button onClick={this.onTogglePlay} variant="contained" color="primary">
					PLAY
				</Button>
			</div>
		) : (
			<InfoWindow info={info} />
		);
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
						Or click an example above to see the last hour location of those
						vessels!
					</Typography>
				</div>
			) : (
				<div className={classes.container}>
					<div style={{ margin: '10px 0 10px 0' }}>{displayCorrectButton}</div>

					<Typography variant="subheading" gutterBottom>
						Search historial for specific date
					</Typography>
					<div style={{ margin: '10px 0 10px 0' }}>
						<Calendar
							fetchVesselLocations={fetchVesselLocations}
							locationData={locationData}
						/>
					</div>

					{displayInfoWindow}
				</div>
			);

		return <div>{displayExamples}</div>;
	}
}

export default withStyles(infoDataStyles, { withTheme: true })(InfoData);
