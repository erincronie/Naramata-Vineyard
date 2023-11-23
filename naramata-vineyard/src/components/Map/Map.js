import React from 'react';
import '../../components/Map/Map.scss';

const Map = () => {

  return (
    <section className='map'>
        <h2 className='map__title'>Find Us</h2>
        <div className='map__container'>
        <iframe className='map__details' width="100%" height="450" frameborder="0" title="Felt Map" src="https://felt.com/embed/map/Naramata-7XDdchwrTpuB5tJDLesGhB?loc=49.58481,-119.58233,14.84z"></iframe>
        <p className='map__lanes'>interactive map with bike lanes, trails and footways</p>
        </div>
    </section>
  );
};

export default Map;
