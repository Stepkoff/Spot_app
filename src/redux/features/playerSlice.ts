import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPlayerSlice, ISong} from '../../types';

const initialState:IPlayerSlice = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {
    layout: '',
    type: '',
    key: '',
    subtitle: '',
    title: '',
    artists: [
      {
        alias: '',
        id: '',
        adamid: '',
      }
    ],
    url: '',
    highlightsurls: {},
    properties: {},
    share: {
      avatar: '',
      image: '',
      href: '',
      html: '',
      snapchat: '',
      subject: '',
      text: '',
      twitter: '',
    },
    hub: {
      type: '',
      image: '',
      options: [
        // @ts-ignore
        {},
      ],
      actions: [
        {
          name: '',
          type: '',
          id: '',
          uri: '',
        },
        {
          name: '',
          type: '',
          id: '',
          uri: '',
        }
      ],
      explicit: false,
      displayname: '',
    },
    images: {
      coverart: '',
      background: '',
      coverarthq: '',
      joecolor: ''
    }
  },
  genreListId: '',
}
interface ISetActiveSongAction {
  song: ISong,
  index: number,
  data?: any
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<ISetActiveSongAction>) => {
      state.activeSong = action.payload.song
      state.isActive = true
      state.currentIndex = action.payload.index
      state.currentSongs = action.payload.data

      // if (action.payload?.data?.tracks?.hits) {
      //   state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      //   state.currentSongs = action.payload.data;
      // }
    },
    nextSong: (state, action) => {
      // // @ts-ignore
      // if (state.currentSongs[action.payload]?.track ) {
      //   // @ts-ignore
      //   state.activeSong = state.currentSongs[action.payload]?.track;
      // } else {
      //   state.activeSong = state.currentSongs[action.payload];
      // }
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },
    prevSong: (state, action) => {
      // // @ts-ignore
      // if (state.currentSongs[action.payload]?.track) {
      //   // @ts-ignore
      //   state.activeSong = state.currentSongs[action.payload]?.track;
      // } else {
      //   state.activeSong = state.currentSongs[action.payload];
      // }
      state.activeSong = state.currentSongs[action.payload]
      state.currentIndex = action.payload;
      state.isActive = true;
    },
    playPause: (state, action:PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    }
  }
})

export default playerSlice.reducer;
export const {playPause, nextSong, prevSong, setActiveSong, selectGenreListId} = playerSlice.actions;