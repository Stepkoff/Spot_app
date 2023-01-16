import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ISong, ISongDetails} from '../../types';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '95e39ab85amshea15b121048a744p1617b2jsnacceed6f0d55')
      return headers
    }
  }),
  endpoints: (builder) => ({
    GetTopCharts: builder.query<ISong[], null>({
      query: () => ({
        url: 'v1/charts/world',
        params: {}
      })
    }),
    getSongDetails: builder.query<ISongDetails, string | undefined>({
      query: (songid) => ({
        url: `v1/tracks/details?track_id=${songid}`,
        params: {}
      })
    }),
    getRelatedSongs: builder.query<ISong[], string | undefined>({
      query: (songid) => ({
        url: `v1/tracks/related?track_id=${songid}`,
        params: {}
      })
    }),
    getArtistDetails: builder.query({
      query: (artistId) => ({
        url: `/v2/artists/details`,
        params: {
          artist_id: artistId
        }
      })
    })
  })
});

export const {useGetTopChartsQuery, useGetSongDetailsQuery, useGetRelatedSongsQuery, useGetArtistDetailsQuery} = shazamCoreApi;