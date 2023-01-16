import React from 'react';
import {ISongDetails} from '../../types';
import {Link} from 'react-router-dom';
import s from './detailsHeader.module.scss';

interface IDetailsHeaderProps {
  songData?: ISongDetails | undefined,
}

const DetailsHeader:React.FC<IDetailsHeaderProps> = ({ songData}) => {
  return (
    <div className={s.detailsHeader}>
      <div><img src={songData?.images.coverart} alt=""/></div>
      <div>
        <p>{songData?.title}</p>
        <p><Link to={`/artists/${songData?.artists[0].adamid}`}>{songData?.subtitle}</Link></p>
      </div>
    </div>
  );
};

export default DetailsHeader;