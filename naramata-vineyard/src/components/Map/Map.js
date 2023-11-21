import React from 'react';
import '../../components/Map/Map.scss';

const Map = () => {

  return (
    <div className='map'>
        <h2 className='map__title'>Location</h2>
        <p className='map__lanes'>plus bike lanes, trails and footways</p>
      <iframe className='map__details' width="100%" height="450" frameBorder="0" title="Felt Map" src="https://felt.com/embed/map/Naramata-7XDdchwrTpuB5tJDLesGhB?loc=49.58481,-119.58233,14.84z"></iframe>
    </div>
  );
};

export default Map;
