import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import infoReducer from 'reducers/infoReducer';
import locationDataReducer from 'reducers/locationDataReducer';
import vesselLocationReducer from 'reducers/vesselLocationReducer';

export default combineReducers({
	info: infoReducer,
	vesselLocations: vesselLocationReducer,
	locationData: locationDataReducer,
	form: reduxForm
});
