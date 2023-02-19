import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { trendsReducer } from '../../entities/trends/model/trends';

import { api } from 'shared/api/service/api';

const rootReducer = combineReducers({ [api.reducerPath]: api.reducer, filter: trendsReducer });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppReducer = ReturnType<typeof rootReducer>
