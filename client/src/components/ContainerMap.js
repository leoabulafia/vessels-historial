import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

//components
import Lines from 'components/Lines';
import Markers from 'components/Markers';

const ContainerMap = ({
	locationData,
	updateInfoFromMarker,
	vesselLocations
}) => {
	const markersOrPolyline = locationData.displayLine ? (
		<Lines locationData={locationData} vesselLocations={vesselLocations} />
	) : (
		<Markers
			vesselLocations={vesselLocations}
			updateInfoFromMarker={updateInfoFromMarker}
		/>
	);
	return (
		<GoogleMap
			zoom={locationData.zoom}
			center={{ lat: locationData.lat, lng: locationData.lng }}>
			{markersOrPolyline}
		</GoogleMap>
	);
};

export default compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyBn5zOaaSSVAjM-IWTb-Ybjf6Wuo59n61w&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withHandlers({
		onMarkerClustererClick: () => markerClusterer => {
			const clickedMarkers = markerClusterer.getMarkers();
			console.log(`Current clicked markers length: ${clickedMarkers.length}`);
			console.log(clickedMarkers);
		}
	}),
	withScriptjs,
	withGoogleMap
)(ContainerMap);
