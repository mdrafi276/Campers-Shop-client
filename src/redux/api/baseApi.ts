import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5000/api/v2/' }),
    endpoints: () => ({}),
})


export const { } = baseApi