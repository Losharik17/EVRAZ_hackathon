import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { trendsReducer } from '../../entities/trends/model/trends';

const rootReducer = combineReducers({ filter: trendsReducer });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppReducer = ReturnType<typeof rootReducer>
