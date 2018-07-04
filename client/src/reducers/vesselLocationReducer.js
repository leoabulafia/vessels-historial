import { FETCH_VESSEL_LOCATIONS } from 'actions/types';

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case FETCH_VESSEL_LOCATIONS:
			return action.payload;
		default:
			return state;
	}
};

