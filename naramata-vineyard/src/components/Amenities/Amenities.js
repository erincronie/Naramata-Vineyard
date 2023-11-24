import React, { useState } from 'react';
import amenitiesData from '../../data/amenities.json';
import '../Amenities/Amenities.scss';

const Amenities = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleContentVisibility = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className='amenities'>
            <h2 className='amenities__main-title'>Amenities</h2>
            <div className='amenities__border-bottom'></div>
            <div className={`amenities__border ${isCollapsed ? 'collapsed' : ''}`}>
                <button className='amenities__expand-button' onClick={toggleContentVisibility}>
                    {isCollapsed ? 'Expand' : 'Collapse'}
                </button>
                <div className={`amenities__container ${isCollapsed ? 'collapsed' : ''}`}>
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
        </section>
    );
};

export default Amenities;



