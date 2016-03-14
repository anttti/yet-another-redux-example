import 'styles/loading-spinner.scss';

import React from 'react';

const LoadingSpinner = () => {
  return (
    <img
      className="loading-spinner"
      src={require('../assets/loading.gif')}
    />
  );
};

export default LoadingSpinner;
