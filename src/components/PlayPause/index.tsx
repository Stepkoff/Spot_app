import React from 'react';
import {ISong} from '../../types';
import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';

interface IPlayPauseProps {
  song: ISong,
  handlePause: () => void
  handlePlay: () => void
  isPlaying: boolean
  activeSong: ISong
}

const PlayPause:React.FC<IPlayPauseProps> = ({song, handlePause, handlePlay, isPlaying, activeSong}) => {
  if(isPlaying && activeSong?.title === song.title) return (<FaPauseCircle size={45} onClick={handlePause}/>)
  return (
    <FaPlayCircle size={45} onClick={handlePlay}/>
  );
};

export default PlayPause;