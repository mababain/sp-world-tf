import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Tents } from '../../components/tents/module'

export type RentType = 'NEW' | 'ADD'

interface TGetPaymentLink {
  tentId: number
  rentType: RentType
  countDays: number
}

export const serverAPI = createApi({
  reducerPath: 'serverAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://84.201.138.211:8080/' }),
  endpoints: (build) => ({
    getAllTents: build.query<Tents, void>({
      query: () => ({
        url: 'allTents',
        method: 'GET',

      }),
    }),
    getPaymentLink: build.mutation<string, TGetPaymentLink>({
      query: ({ tentId, rentType, countDays }: TGetPaymentLink) => ({
        url: 'paymentLink',
        method: 'POST',
        params: { tentId, rentType, countDays },
        credentials: 'include',
      }),
    }),
  }),
})
