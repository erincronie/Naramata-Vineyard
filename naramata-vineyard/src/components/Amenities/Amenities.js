// Amenities.jsx
import React from 'react';
import amenitiesData from '../../data/amenities.json';
import '../Amenities/Amenities.scss';

const Amenities = () => {
  return (
    <div className='amenities'>
      <div className='amenities__container'>
        {Object.keys(amenitiesData).map((section, index) => {
          const iconString = amenitiesData[section].icon;
          return (
            <div className='amenities__section' key={index}>
              <div dangerouslySetInnerHTML={{ __html: iconString }} className='amenities__icons' />
              <h3 className='amenities__titles'>{amenitiesData[section].title}:</h3>
              {amenitiesData[section].features.map((feature, featureIndex) => (
                <p className='amenities__features' key={featureIndex}>{feature}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
