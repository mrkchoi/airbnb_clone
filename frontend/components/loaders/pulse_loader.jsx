import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// To use PulseLoader:
  // 1. Import PulseLoader into component
  // 2. Add local state { loading: true }
  // 3. SetTimeout to toggle local state to { loading: false } (to simulate loading)
  // 4. Render the PulseLoader component if (this.state.loading)

const PulseLoaderAnimation = ({ loading }) => {
  return (
    <PulseLoader
      className="loading-dots"
      sizeUnit={"px"}
      size={12}
      color={"#008489"}
      loading={loading} />
  );
};


export default PulseLoaderAnimation;