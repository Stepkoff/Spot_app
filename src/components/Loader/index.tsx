import React from 'react';

interface ILoaderProps {
  title?: string
}
const loaderImage = require('../../assets/loader.svg');

const Loader:React.FC<ILoaderProps> = ({title}) => {
  return (
    <div>
      <img src={loaderImage.default} alt='loader' />
      <h1>{title || 'Loading...'}</h1>
    </div>
  );
};

export default Loader;