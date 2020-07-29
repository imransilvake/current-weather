// redux
import { combineReducers } from 'redux';

// app
import proxyReducer from './proxy/proxy';

const rootReducer = combineReducers({
	proxy: proxyReducer
});

export default rootReducer;
