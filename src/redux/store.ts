import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { eventsReducer } from './reducers/eventsReducer';

const rootReducer = combineReducers({
    events: eventsReducer
  });
  
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware as any));

export default store;