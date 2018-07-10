import React from 'react';
import { Polyline } from 'react-google-maps';

class Lines extends React.Component {
	state = {
		arrowOffset: '0%'
	};

	onAnimateArrow = millisecs => {
		let count = 0;
		let offset;

		this.arrowInterval = setInterval(() => {
			count = (count + 1) % (millisecs / 20 / this.props.locationData.speed);
			offset =
				count / (millisecs / 20 / 100 / this.props.locationData.speed) + '%';
			this.setState({ arrowOffset: offset });
		}, 20);
	};

	componentDidUpdate(prevProps) {
		const { locationData } = this.props;
		if (prevProps.locationData.isPlaying !== locationData.isPlaying) {
			switch (locationData.isPlaying) {
				case false:
					clearInterval(this.arrowInterval);
					this.setState({ arrowOffset: '0%' });
					break;
				case true:
					this.onAnimateArrow(locationData.millisecs);
					break;
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.arrowInterval);
		this.arrowInterval = undefined;
		this.props.togglePlay();
	}

	render() {
		const { vesselLocations } = this.props;
		return (
			<Polyline
				path={vesselLocations.map(({ LAT, LON }) => ({
					lat: Number(LAT),
					lng: Number(LON)
				}))}
				options={{
					icons: [
						{
							icon: {
								path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
								scale: 4,
								fillColor: 'red',
								fillOpacity: 0.8,
								strokeWeight: 1
							},
							offset: this.state.arrowOffset
						}
					]
				}}
			/>
		);
	}
}

export default Lines;
