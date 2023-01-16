import React from 'react';
import Discover from './pages/Discover';
import ArtistDetails from './pages/ArtistDetails';
import SongDetails from './pages/SongDetails';
import {Routes, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import TopPlay from './components/TopPlay';
import MusicPlayer from './components/MusicPlayer';
import {useAppSelector} from './hooks/reduxHooks';
import s from './App.module.scss';

const App = () => {
  const { activeSong } = useAppSelector((state) => state.player);

  return (
    <div className={s.app}>
      <SideBar />
      <div className={s.app__container}>
        <div className={s.app__content}>
          <div className={s.app__pageWrap}>
            <Routes>
              <Route path='/' element={<Discover />} />
              <Route path='/artists/:id' element={<ArtistDetails />} />
              <Route path='/songs/:songid' element={<SongDetails />} />
            </Routes>
          </div>
          <div className={s.app__TopWrap}>
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong?.title ? (
        <div className={s.app__player}>
          <MusicPlayer/>
        </div>
      ) : null}
    </div>
  );
};

export default App;