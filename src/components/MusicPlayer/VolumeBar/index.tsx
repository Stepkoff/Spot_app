import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import s from './volume.module.scss';

interface IVolumeBarProps {
  value: number,
  min: number,
  max: number,
  setVolume: (arg: number) => void
}

const VolumeBar:React.FC<IVolumeBarProps> = ({ value, min, max, setVolume }) => {
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setVolume(+e.target.value)
  }
  return (
    <div className={s.volume}>
      {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={() => setVolume(1)} />}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={changeHandler}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  )
}

export default VolumeBar;
