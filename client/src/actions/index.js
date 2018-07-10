import {
	CHANGE_SPEED,
	FETCH_VESSEL_LOCATIONS,
	UPDATE_LOCATION,
	UPDATE_INFO_FROM_MARKER,
	TOGGLE_MARKERS_LINE,
	TOGGLE_PLAY,
	SAVE_IMO_OR_MMSI,
	SET_MILLISECONDS
} from 'actions/types';
import { SubmissionError } from 'redux-form';

import axios from 'axios';

/*
	A classical example on how to use reduxThunk to chain asynchronous actions.
	First, it fetches vessel locations and then, updates latitude, longitude and
	zoom according to the result of the first action.
*/
export const fetchVesselLocations = data => (dispatch, getState) => {
	return axios
		.post('/api/vessellocations', data)
		.then(res => {
			if (res.data.errors) {
				const errorSubmit = new SubmissionError({
					searchVessel: 'Invalid data'
				});
				throw errorSubmit;
			} else {
				dispatch({ type: FETCH_VESSEL_LOCATIONS, payload: res.data });
				return res.data;
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
		})
		.catch(err => {
			console.log('Insert a valid IMO or MMSI number');
		});
};

export const changeSpeed = speed => ({
	type: CHANGE_SPEED,
	payload: speed
});

export const toggleMarkersLine = () => ({
	type: TOGGLE_MARKERS_LINE
});

export const togglePlay = () => ({
	type: TOGGLE_PLAY
});

export const saveImoOrMmsi = code => ({
	type: SAVE_IMO_OR_MMSI,
	payload: code
});

export const setMilliseconds = millisecs => ({
	type: SET_MILLISECONDS,
	payload: millisecs
});

export const updateInfoFromMarker = (speed, course, lat, lng, timestamp) => ({
	type: UPDATE_INFO_FROM_MARKER,
	payload: { speed, course, lat, lng, timestamp }
});
