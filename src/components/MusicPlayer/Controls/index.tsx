import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import {ISong} from '../../../types';
import s from './controls.module.scss';

interface IControlsProps {
  isPlaying: boolean
  repeat: boolean
  setRepeat: (arg: boolean | ((arg: boolean) => boolean) ) => void
  shuffle: boolean
  setShuffle: (arg: boolean | ((arg: boolean) => boolean) ) => void
  currentSongs: ISong[]
  handlePlayPause: () => void
  handlePrevSong: () => void
  handleNextSong: () => void
  isActive: boolean
}

const Controls:React.FC<IControlsProps> = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => {
  return (
    <div className={s.controls}>
      <BsArrowRepeat size={20} fill={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} />
      {currentSongs?.length && <MdSkipPrevious size={30} color='#FFF' onClick={handlePrevSong} />}
      {isPlaying ? (
        <BsFillPauseFill size={45} color='#FFF' onClick={handlePlayPause}/>
      ) : (
        <BsFillPlayFill size={45} color='#FFF' onClick={handlePlayPause}/>
      )}
      {currentSongs?.length && <MdSkipNext size={30} color='#FFF' onClick={handleNextSong} />}
      <BsShuffle size={20} fill={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)}/>
    </div>
  )
}

export default Controls;
