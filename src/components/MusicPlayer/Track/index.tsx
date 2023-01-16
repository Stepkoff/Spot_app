import React from 'react';
import {ISong} from '../../../types';
import s from './track.module.scss';
interface ITrackProps {
  activeSong: ISong
}

const Track:React.FC<ITrackProps> = ({ activeSong }) => {
  return (
    <div className={s.track}>
      <div>
        <img src={activeSong?.images?.coverart} alt='cover art' />
      </div>
      <div>
        <p>
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </p>
        <p>
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </div>
    </div>
  )
}

export default Track;
