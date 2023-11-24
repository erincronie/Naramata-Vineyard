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
              <div className='amenities__title-div'>
                <div className='amenities__icons' dangerouslySetInnerHTML={{ __html: iconString }} />
                <h3 className='amenities__titles'>{amenitiesData[section].title}:</h3>
              </div>
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
