import React from 'react';
import s from './seekbar.module.scss';

interface ISeekbarProps {
  value: number
  min: number
  max: number
  setSeekTime: (arg: number) => void
  appTime: number
}

const Seekbar:React.FC<ISeekbarProps> = ({ value, min, max, setSeekTime, appTime }) => {
  const getTime = (time: number):string => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeekTime(+e.target.value)
  }
  return (
    <div className={s.seekBar}>
      <button type='button' onClick={() => setSeekTime(appTime - 5)}>
        -
      </button>
      <p>{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type='range'
        step='any'
        value={value}
        min={min}
        max={max}
        onInput={handleInput}
      />
      <p>{max === 0 ? '0:00' : getTime(max)}</p>
      <button type='button' onClick={() => setSeekTime(appTime + 5)}>
        +
      </button>
    </div>
  );
};

export default Seekbar;
