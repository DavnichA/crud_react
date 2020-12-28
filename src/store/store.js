import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import crudReducer from './crudReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({crud: crudReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;