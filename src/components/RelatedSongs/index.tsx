import React from 'react';
import {ISong} from '../../types';
import s from './relatedSongs.module.scss';
import {TopChartCard} from "../TopPlay";
import {playPause, setActiveSong} from "../../redux/features/playerSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";

interface IRelatedSongsProps {
  data: ISong[] | undefined
  isPlaying: boolean
  activeSong: ISong
}
const RelatedSongs:React.FC<IRelatedSongsProps> = ({activeSong, isPlaying, data}) => {
  const dispatch = useAppDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = (song:ISong, data:ISong[], index:number) => {
    dispatch(setActiveSong({song, data, index}))
    dispatch(playPause(true))
  }
  return (
    <div className={s.relatedSongs}>
      <h2>Related Songs:</h2>
      {data?.map((item, index) =>
        <TopChartCard key={`related-${index}`} song={item} index={index} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePauseClick} handlePlayClick={() => handlePlayClick(item, data, index)}></TopChartCard>
      )}
    </div>
  );
};

export default RelatedSongs;