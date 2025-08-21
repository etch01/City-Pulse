import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { eventsReducer } from './reducers/eventsReducer';
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    events: eventsReducer
  });

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);


  const middleware = [thunk];
  const store = createStore(persistedReducer, applyMiddleware(...middleware as any));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>


export default store;