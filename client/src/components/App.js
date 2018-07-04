import React from 'react';
import flow from 'lodash/flow';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//styles
import appStyles from 'styles/appStyles';
//components
import ContainerMap from 'components/ContainerMap';
import HowToUse from 'components/HowToUse';
import InfoData from 'components/InfoData';
import TopBar from 'components/TopBar';
//actions
import {
	fetchVesselLocations,
	saveImoOrMmsi,
	toggleMarkersLine,
	togglePlay,
	updateInfoFromMarker
} from 'actions';

class App extends React.Component {
	render() {
		const {
			classes,
			locationData,
			fetchVesselLocations,
			info,
			saveImoOrMmsi,
			toggleMarkersLine,
			togglePlay,
			updateInfoFromMarker,
			vesselLocations
		} = this.props;

		return (
			<div className={classes.root}>
				<TopBar
					classes={classes}
					fetchVesselLocations={fetchVesselLocations}
					saveImoOrMmsi={saveImoOrMmsi}
				/>

				<div className={classes.container}>
					<HowToUse
						fetchVesselLocations={fetchVesselLocations}
						saveImoOrMmsi={saveImoOrMmsi}
					/>
					<div className={classes.mapContainer}>
						<div className={classes.infoDataWrapper}>
							<InfoData
								locationData={locationData}
								info={info}
								vesselLocations={vesselLocations}
								fetchVesselLocations={fetchVesselLocations}
								toggleMarkersLine={toggleMarkersLine}
								togglePlay={togglePlay}
							/>
						</div>
						<div className={classes.containerMapWrapper}>
							<ContainerMap
								locationData={locationData}
								vesselLocations={vesselLocations}
								updateInfoFromMarker={updateInfoFromMarker}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ locationData, info, vesselLocations }) => ({
	locationData,
	info,
	vesselLocations
});

export default flow(
	connect(mapStateToProps, {
		fetchVesselLocations,
		saveImoOrMmsi,
		toggleMarkersLine,
		togglePlay,
		updateInfoFromMarker
	}),
	withStyles(appStyles, { withTheme: true })
)(App);
