import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

class Markers extends React.Component {
	onDisplayInfo = vessel => () => {
		let speed = vessel.SPEED;
		let course = vessel.COURSE;
		let lat = vessel.LAT;
		let lng = vessel.LON;
		let timestamp = vessel.TIMESTAMP;
		this.props.updateInfoFromMarker(speed, course, lat, lng, timestamp);
	};
	render() {
		const { vesselLocations, onMarkerClustererClick } = this.props;
		return (
			<MarkerClusterer
				onClick={onMarkerClustererClick}
				averageCenter
				enableRetinaIcons
				gridSize={10}>
				{vesselLocations.map((vessel, i) => {
					let latitude = Number(vessel.LAT);
					let longitude = Number(vessel.LON);
					return (
						<Marker
							name={i}
							key={i}
							position={{
								lat: latitude,
								lng: longitude
							}}
							onClick={this.onDisplayInfo(vessel)}
						/>
					);
				})}
			</MarkerClusterer>
		);
	}
}

export default Markers;
