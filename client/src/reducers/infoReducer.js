import { UPDATE_INFO_FROM_MARKER } from 'actions/types';

const initState = {
	speed: null,
	course: null,
	lat: null,
	lng: null,
	timestamp: null
};

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_INFO_FROM_MARKER:
			return {
				speed: action.payload.speed,
				course: action.payload.course,
				latitude: action.payload.lat,
				longitude: action.payload.lng,
				timestamp: action.payload.timestamp
			};
		default:
			return state;
	}
};
