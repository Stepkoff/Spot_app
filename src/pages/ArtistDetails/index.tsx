import React from 'react';
import {useParams} from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import s from './ArtistDetails.module.scss';
import {
  useGetArtistDetailsQuery,
} from "../../redux/services/shazamCore";

const ArtistDetails:React.FC = () => {
  const {id} = useParams();
  const {data, error, isLoading} = useGetArtistDetailsQuery(id)
  if(isLoading) return <Loader/>
  if(error) return <Error/>

  console.log(data?.data[0]?.attributes)
  return (
    <>
      <div className={s.artistDetails}>
        <div><img src={data?.data[0]?.attributes.artwork.url} alt=""/></div>
        <div>
          <p>{data?.data[0]?.attributes.name}</p>
          <p>{data?.data[0]?.attributes.genreNames}</p>
        </div>
      </div>
      <p className={s.artistBio}>
        {data?.data[0]?.attributes?.artistBio?.replaceAll(/(<i>)?(<\/i>)?/g, '')}
      </p>
    </>
  );
};

export default ArtistDetails;