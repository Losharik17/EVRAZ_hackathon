import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers, bindActionCreators } from '@reduxjs/toolkit';
import { trendsReducer, trendsActions } from './trends';

const rootReducer = combineReducers({ trends: trendsReducer });

export const trendsStore = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof trendsStore.getState>
export type TrendsDispatch = typeof trendsStore.dispatch
export type TrendsReducer = ReturnType<typeof rootReducer>

export const useTrendsDispatch: () => TrendsDispatch = useDispatch;
export const useTrendsSelector: TypedUseSelectorHook<TrendsReducer> = useSelector;

export const useTrendsActions = () => {
    const dispatch = useTrendsDispatch();

    return bindActionCreators(trendsActions, dispatch);
};
