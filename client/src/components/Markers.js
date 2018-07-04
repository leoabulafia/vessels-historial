import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

class Markers extends React.Component {
	state = {
		isOpen: false
	};
	onToggleOpen = () => {
		console.log(this.state.isOpen);
		this.setState({ isOpen: !this.state.isOpen });
	};
	renderInfoWindow = () => {
		if (this.state.isOpen === true) {
			return <InfoWindow>hello</InfoWindow>;
		}
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
							onClick={this.onToggleOpen}>
							{this.state.isOpen && <InfoWindow>h1</InfoWindow>}
						</Marker>
					);
				})}
			</MarkerClusterer>
		);
	}
}

export default Markers;
