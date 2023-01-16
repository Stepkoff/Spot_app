import React from 'react';
import {useParams} from "react-router-dom";
import DetailsHeader from "../../components/DetailsHeader";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import s from './songDetails.module.scss';
import {useGetRelatedSongsQuery, useGetSongDetailsQuery} from "../../redux/services/shazamCore";
import RelatedSongs from "../../components/RelatedSongs";
import {useAppSelector} from "../../hooks/reduxHooks";


const SongDetails:React.FC = () => {
  const {songid} = useParams();
  const {data: songData, error, isLoading} = useGetSongDetailsQuery(songid);
  const {data: relatedSongsArr, isLoading: isLoadingRelated, error: errorRelated} = useGetRelatedSongsQuery(songid);
  const {isPlaying, activeSong} = useAppSelector(state=>state.player)
  if(isLoading || isLoadingRelated) return <Loader/>
  if(error || errorRelated) return <Error/>
  return (
    <>
      <div className={s.songDetails}>
        {songData?.artists ? <DetailsHeader songData={songData}/> : null}
        <div>
          <h2>Lyrics:</h2>
          <div>
            {songData?.sections[1].text !== undefined && songData?.sections[1].type === 'LYRICS'
              ? songData.sections[1].text.map((line, index) => <p key={`songLine-${index}`}>{line}</p>)
              : <p>Sorry, no lyrics found for this song =(</p>
            }
          </div>
        </div>
      </div>
      <RelatedSongs
        data={relatedSongsArr}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </>

  );
};

export default SongDetails;