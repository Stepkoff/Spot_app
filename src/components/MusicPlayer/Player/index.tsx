import React, {useRef, useEffect} from 'react';
import {ISong} from '../../../types';

interface IPlayerProps {
  activeSong: ISong
  isPlaying: boolean
  volume: number
  seekTime: number
  onEnded: () => void
  setAppTime: (arg: number) => void
  setDuration: (arg: number) => void
  repeat: boolean
  currentIndex: number
}

const Player:React.FC<IPlayerProps> = ({ activeSong, isPlaying, volume, seekTime, onEnded, setAppTime, repeat, setDuration }) => {
  const ref = useRef<any>(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  const onTimeUpdateHandler = (e: React.ChangeEvent<HTMLAudioElement>) => {
    setAppTime(+e.target.currentTime)
  }
  const onLoadedDataHandler = (e: React.ChangeEvent<HTMLAudioElement>) => {
    setDuration(e.target.duration)
  }
  return (
    <audio
      src={activeSong.hub.actions ? activeSong.hub.actions[1].uri : ''}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdateHandler}
      onLoadedData={onLoadedDataHandler}
    />
  );
};

export default Player;
