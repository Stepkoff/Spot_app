import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';
import 'swiper/swiper-bundle.css';
import PlayPause from '../PlayPause';
import {playPause, setActiveSong} from '../../redux/features/playerSlice';
import {useGetTopChartsQuery} from '../../redux/services/shazamCore';
import {ISong} from '../../types';
import s from './topPlay.module.scss';

interface ITopChartCardProps {
  song: ISong
  index: number
  isPlaying: boolean,
  activeSong: ISong,
  handlePause: () => void
  handlePlayClick: (playsong: ISong, index: number) => void
}
export const TopChartCard:React.FC<ITopChartCardProps> = ({song, index,activeSong, isPlaying, handlePlayClick, handlePause}) => {
  return (
    <div className={s.topChartCard}>
      <h3>{index+1}.</h3>
      <div className={s.topChartCard__content}>
        <img src={song.images?.coverart} alt={song.title} />
        <div>
          <Link to={`/songs/${song.key}`}>
            <p className={s.topChartCard__title}>{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists ? (song?.artists[0]?.adamid) : ''}`}>
            <p className={s.topChartCard__subtitle}>{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause song={song} handlePause={handlePause} handlePlay={() => handlePlayClick(song, index)} isPlaying={isPlaying} activeSong={activeSong}/>
    </div>
  )
}

const TopPlay:React.FC = () => {
  const dispatch = useAppDispatch();
  const {activeSong, isPlaying} = useAppSelector(state => state.player);
  const {data} = useGetTopChartsQuery(null, {});
  const divRef = useRef<HTMLDivElement | null>(null);
  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = (playsong:ISong, index: number) => {
    dispatch(setActiveSong({song: playsong, index, data}))
    dispatch(playPause(true))
  }

  useEffect(() => {
    divRef.current?.scrollIntoView()
  })
  return (
    <div className={s.topPlay}>
      <div>
        <div className={s.topPlay__charts}>
          <h2>Top Charts</h2>
        </div>
        <div>
          {topPlays?.map((song, index, ) => (
            <TopChartCard index={index} song={song} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePauseClick} handlePlayClick={handlePlayClick} key={`top${song.key}`}/>
          ))}
        </div>
      </div>
      <div>
        <div className={s.topArtists}>
          <h2>Top Artists</h2>
          <Link to={'/top-artists'}>
            <p>See more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className={'mt-4'}
        >
          {topPlays?.map((song) => (
            <SwiperSlide
              key={`topArtists${song.key}`}
              className={s.swiperSlide}
            >
              <Link to={`/artists/${song.artists? (song?.artists[0]?.adamid) : ''}`}>
                <img src={song.images?.background} alt='name' />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;