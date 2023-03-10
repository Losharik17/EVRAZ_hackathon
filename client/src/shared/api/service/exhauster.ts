import { Aglomachine } from '../typicode/exhauster';
import { Exhauster, ExhausterMain, ExhausterChart } from '../models';
import { api } from './api';

/* eslint-disable */
export const exhausterApi = api.injectEndpoints({
    endpoints: (build) => ({
        getExhauster: build.query<ExhausterMain, any>({
            query: (id) => ({ url: '/eksgauster' }),
            providesTags: ['Exhauster']
        }),
        getAllExhausterProperties: build.query<Exhauster, any>({
            query: (id) => ({ url: '/eksgauster_all/' + id }),
            providesTags: ['Exhauster']
        }),
        getAglomachine: build.query<Aglomachine[], any>({ 
            query: (id) => ({ url: '/aglomachine' }),
            providesTags: ['Exhauster']
        }),
        getChartTitles: build.query<ExhausterChart, any>({ 
            query: () => ({ url: '/graphics' }),
            providesTags: ['Exhauster']
        }),
        getChart: build.mutation<any, any>({
            query: (line: any) => ({
                url: '/user/registration',
                method: 'POST',
                body: line
            }),
        })
    }) 
});
/* eslint-enable */
export const {
    useGetExhausterQuery,
    useLazyGetExhausterQuery,
    useLazyGetAllExhausterPropertiesQuery,
    useGetAllExhausterPropertiesQuery,
    useLazyGetAglomachineQuery,
    useGetChartTitlesQuery,
    useLazyGetChartTitlesQuery,
} = exhausterApi;
