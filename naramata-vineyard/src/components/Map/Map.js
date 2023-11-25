import React from 'react';
import '../../components/Map/Map.scss';

const Map = () => {

  return (
    <section className='map'>
        <h2 className='map__title'>Find Us</h2>
        <div className='map__border-bottom'></div>
        <div className='map__container'>
        <iframe className='map__details' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.647473911549!2d-119.58196092314452!3d49.58553837143997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54827b58260f4db5%3A0x87954edddddf2bba!2s2890%20Naramata%20Rd%2C%20Naramata%2C%20BC%20V0H%201N0!5e0!3m2!1sen!2sca!4v1700768861744!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>       
        </div>
    </section>
  );
};

export default Map;
