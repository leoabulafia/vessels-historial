/*
	This component will display information of a marker clicked.
  It's a child of InfoData
*/

import React from 'react';
import Typography from '@material-ui/core/Typography';
//styles

class InfoWindow extends React.Component {
	render() {
		const { info } = this.props;
		return (
			<div style={{ margin: '10px 0 10px 0' }}>
				<Typography variant="subheading" gutterBottom>
					Click on a marker to see info
				</Typography>
				<div
					style={{
						border: '1px solid blue',
						borderRadius: '5px'
					}}>
					<div style={{ margin: '10px' }}>
						<Typography variant="body2">Speed: {info.speed} knots </Typography>
						<Typography variant="body2">
							Course: {info.course} degrees
						</Typography>
						<Typography variant="body2">Latitude: {info.latitude}</Typography>
						<Typography variant="body2">Longitude: {info.longitude}</Typography>
						<Typography variant="body2">Timestamp: {info.timestamp}</Typography>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoWindow;
