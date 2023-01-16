import React from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import SongCard from '../../components/SongCard';
import {useGetTopChartsQuery} from '../../redux/services/shazamCore';
import {useAppSelector} from '../../hooks/reduxHooks';
import s from './discover.module.scss';

const Discover = () => {
  const {activeSong, isPlaying} = useAppSelector(state => state.player);
  const {error, data, isFetching} = useGetTopChartsQuery(null, {});
  const genreTitle = 'Pop';
  if (isFetching) return <Loader/>;
  if(error) return <Error/>
  return (
    <div className={s.discover}>
      <div className={s.discover__header}>
        <h2>Discover {genreTitle}</h2>
      </div>
      <div className={s.discover__cards}>
        {data?.map((song, index) => (
          <SongCard
            activeSong={activeSong}
            isPlaying={isPlaying}
            key={song.key}
            song={song}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;