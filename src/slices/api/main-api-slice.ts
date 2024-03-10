import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_ORIGIN, endpoints } from '../../const';

type QueryParams = {
  singleFilter: string;
  multipleFilter?: string[];
  offset?: number;
};

const getQueryParams = (params: QueryParams) => {
  const urlParams = new URLSearchParams();

  urlParams.append('singleFilter', params.singleFilter);

  if (params.multipleFilter) {
    urlParams.append('multipleFilter', params.multipleFilter.toString());
  }

  const offsetParam = params.offset ? params.offset : 0;

  urlParams.append('offset', offsetParam.toString());

  return urlParams.toString();
};

export const mainApiSlice = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getTestDataWithPagination: builder.query<any, QueryParams>({
      query: (params) => ({
        url: `${MOCK_ORIGIN}`,
        headers: {
          'X-RapidAPI-Key':
            '1b4a3507bemsh279f1b1c50394e8p169f69jsn3641a64806e9',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      }),
    }),
  }),
});

export const { useGetTestDataWithPaginationQuery } = mainApiSlice;
