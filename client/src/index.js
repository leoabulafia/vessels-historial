import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'reducers';
import 'index.css';

//components
import App from 'components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
