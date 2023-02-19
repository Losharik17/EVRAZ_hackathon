import { Exhauster, ExhausterMain } from '../models';
import { api } from './api';

/* eslint-disable */
export const exhausterApi = api.injectEndpoints({
    endpoints: (build) => ({
        getExhauster: build.query<ExhausterMain, any>({
            query: (id) => ({ url: '/eksgauster/' + id }),
            providesTags: ['Exhauster']
        }),
        getAllExhausterProperties: build.query<Exhauster, any>({
            query: (id) => ({ url: '/eksgauster_all' }),
            providesTags: ['Exhauster']
        }),
    })
});
/* eslint-enable */
export const {
    useGetExhausterQuery,
    useLazyGetExhausterQuery,
    useLazyGetAllExhausterPropertiesQuery,
    useGetAllExhausterPropertiesQuery,
} = exhausterApi;
