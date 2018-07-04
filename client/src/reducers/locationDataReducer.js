import {
	UPDATE_LOCATION,
	TOGGLE_MARKERS_LINE,
	TOGGLE_PLAY,
	SAVE_IMO_OR_MMSI
} from 'actions/types';

const initState = {
	zoom: 2,
	lat: 0,
	lng: 0,
	displayLine: false,
	isPlaying: false,
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
				imoOrMmsi: state.imoOrMmsi
			};
		case TOGGLE_MARKERS_LINE:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: !state.displayLine,
				isPlaying: state.isPlaying,
				imoOrMmsi: state.imoOrMmsi
			};
		case SAVE_IMO_OR_MMSI:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: state.displayLine,
				isPlaying: state.isPlaying,
				imoOrMmsi: action.payload
			};
		case TOGGLE_PLAY:
			return {
				zoom: state.zoom,
				lat: state.lat,
				lng: state.lng,
				displayLine: state.displayLine,
				isPlaying: !state.isPlaying,
				imoOrMmsi: state.imoOrMmsi
			};
		default:
			return state;
	}
};
