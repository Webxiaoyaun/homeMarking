import React from 'react';
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/index'

const history = createHashHistory();
const routeWare = routerMiddleware(history);

let store = createStore(reducer, applyMiddleware(routeWare, thunk));
window._store = store;
export default store;

