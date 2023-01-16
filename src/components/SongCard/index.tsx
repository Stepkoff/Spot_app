import React from 'react';
import {Link} from 'react-router-dom';
import PlayPause from '../PlayPause';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {playPause, setActiveSong} from '../../redux/features/playerSlice';
import {ISong} from '../../types';
import s from './songCard.module.scss';

interface ISongCardProps {
  song: ISong,
  index: number
  isPlaying: boolean,
  activeSong: ISong
  data: ISong[]
}

const SongCard:React.FC<ISongCardProps> = ({song, index, activeSong, isPlaying, data}) => {
  const dispatch = useAppDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, index}))
    dispatch(playPause(true))
  }
  return (
    <div className={s.songCard}>
      <div className={s.songCard__body}>
        <div className={activeSong.title === song.title ? `${s.songCard__play_active} ${s.songCard__play}` : s.songCard__play}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song?.images?.coverart} alt='song_img'/>
      </div>
      <div className={s.songCard__description}>
        <p>
          <Link to={`/songs/${song?.key}`}>{song?.title}</Link>
        </p>
        <p>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song?.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;