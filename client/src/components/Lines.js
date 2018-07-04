import React from 'react';
import { Polyline } from 'react-google-maps';

class Lines extends React.Component {
	state = {
		arrowOffset: '0%'
	};

	onAnimateArrow = () => {
		let count = 0;
		let offset;

		const arrowInterval = window.setInterval(() => {
			count = (count + 1) % 2000;
			offset = count / 20 + '%';
			this.setState({ arrowOffset: offset });
		}, 20);
	};

	componentDidMount() {
		this.onAnimateArrow();
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
