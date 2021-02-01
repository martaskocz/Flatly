import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = composeWithDevTools || compose;

const store = createStore(reducer /* preloadedState, */, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

export default store;
