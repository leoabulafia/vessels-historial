import {
	FETCH_VESSEL_LOCATIONS,
	UPDATE_LOCATION,
	UPDATE_INFO_FROM_MARKER,
	TOGGLE_MARKERS_LINE,
	SAVE_IMO_OR_MMSI
} from 'actions/types';
import { SubmissionError } from 'redux-form';

import axios from 'axios';

/*
	A classical example on how to use reduxThunk to chain asynchronous actions.
	First, it fetches vessel locations and then, updates latitude, longitude and
	zoom according to the result of the first action.
*/
export const fetchVesselLocations = data => (dispatch, getState) => {
	return new Promise((resolve, reject) => {
		axios
			.post('/api/vessellocations', data)
			.then(res => {
				if (res.data.errors) {
					const errorSubmit = new SubmissionError({
						searchVessel: 'Invalid data'
					});
					reject(errorSubmit);
				} else {
					dispatch({ type: FETCH_VESSEL_LOCATIONS, payload: res.data });
					resolve();
				}
			})
			.then(res => {
				const vesselLocations = getState().vesselLocations;
				const zoom = 9;
				const lat = Number(
					vesselLocations[Math.floor(vesselLocations.length / 2)].LAT
				);
				const lng = Number(
					vesselLocations[Math.floor(vesselLocations.length / 2)].LON
				);
				dispatch({ type: UPDATE_LOCATION, payload: { zoom, lat, lng } });
			});
	});
};

export const toggleMarkersLine = () => ({
	type: TOGGLE_MARKERS_LINE
});

export const saveImoOrMmsi = code => ({
	type: SAVE_IMO_OR_MMSI,
	payload: code
});

export const updateInfoFromMarker = (speed, course, lat, lng, timestamp) => ({
	type: UPDATE_INFO_FROM_MARKER,
	payload: { speed, course, lat, lng, timestamp }
});
