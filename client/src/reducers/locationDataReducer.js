import {
	CHANGE_SPEED,
	UPDATE_LOCATION,
	TOGGLE_MARKERS_LINE,
	TOGGLE_PLAY,
	SAVE_IMO_OR_MMSI,
	SET_MILLISECONDS
} from 'actions/types';

const initState = {
	zoom: 2,
	lat: 0,
	lng: 0,
	displayLine: false,
	isPlaying: false,
	speed: 1,
	millisecs: 0,
	imoOrMmsi: null
};

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_LOCATION:
			return {
				zoom: action.payload.zoom,
				lat: action.payload.lat,
				lng: action.payload.lng,
				displayLine: state.displayLine,
				isPlaying: state.isPlaying,
				speed: state.speed,
				millisecs: state.millisecs,
				imoOrMmsi: state.imoOrMmsi
			};
		case TOGGLE_MARKERS_LINE:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: !state.displayLine,
				isPlaying: state.isPlaying,
				speed: state.speed,
				millisecs: state.millisecs,
				imoOrMmsi: state.imoOrMmsi
			};
		case SAVE_IMO_OR_MMSI:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: state.displayLine,
				isPlaying: state.isPlaying,
				speed: state.speed,
				millisecs: state.millisecs,
				imoOrMmsi: action.payload
			};
		case SET_MILLISECONDS:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: state.displayLine,
				isPlaying: state.isPlaying,
				speed: state.speed,
				millisecs: action.payload,
				imoOrMmsi: state.imoOrMmsi
			};
		case CHANGE_SPEED:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: state.displayLine,
				isPlaying: state.isPlaying,
				speed: action.payload,
				millisecs: state.millisecs,
				imoOrMmsi: state.imoOrMmsi
			};
		case TOGGLE_PLAY:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: state.displayLine,
				isPlaying: !state.isPlaying,
				speed: state.speed,
				millisecs: state.millisecs,
				imoOrMmsi: state.imoOrMmsi
			};
		default:
			return state;
	}
};
