import { Exhauster, ExhausterMain } from 'shared/api/models';
/* eslint-disable max-len */
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://185.87.50.137:7777/api' });

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 10 });

export const api = createApi({
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({}),
    tagTypes: ['Exhauster'],
});
