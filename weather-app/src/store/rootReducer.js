import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import weatherReducer from '../feature/slices/weatherSlice';


const persistConfig = {
    key: "root",
    storage,
};

export const rootReducer = combineReducers({
    weather: weatherReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);