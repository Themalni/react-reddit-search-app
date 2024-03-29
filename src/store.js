import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initState = {}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store;