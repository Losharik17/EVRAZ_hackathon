import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useTrendsActions } from './store';

type Filters = Array<string>

interface TrendsState {
    data: Array<string>;
    filtered: Array<string>;
    filters: Filters;
    currentFilter: any;
}

const initialState: TrendsState = {
    data: [],
    filtered: [],
    filters: [],
    currentFilter: {},
};

const trendModel = createSlice({
    name: 'trends',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<Array<string>>) => {
            state.data = action.payload;
        },
        filter: (state, action: PayloadAction<Filters>) => {
            state.filtered = state.data.filter((trend) => Boolean(action.payload));
        },
        addFilter: (state, action: PayloadAction<string>) => {
            state.filters = [...state.filters, action.payload];
        },
        removeFilter: (state, action: PayloadAction<string>) => {
            state.filters = state.filters.filter((filter) => filter !== action.payload);
        },
        getFilteredTrends: (state, action: PayloadAction<string>) => {
            const [currentFilter] = state.filters.filter((filter) => filter === action.payload);
            state.currentFilter = currentFilter;
        },
    },
});

export const trendsActions = trendModel.actions;
export const trendsReducer = trendModel.reducer;
