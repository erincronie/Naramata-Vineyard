import React, { useState, useEffect } from 'react';
import '../Slideshow/Slideshow.scss';
import slide1 from '../../assets/images/pool-and-lake.jpg';
import slide2 from '../../assets/images/vineyard-overlooking-lake.jpeg';
import slide3 from '../../assets/images/vineyard-leafs.JPG';
import slide4 from '../../assets/images/cat.jpeg';
import slide5 from '../../assets/images/night-buddah.jpeg';
import slide6 from '../../assets/images/sunset-barrels.jpeg';

const Slideshow = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
    
  }, [currentIndex]);

  const updateSlide = () => {
    const translateValue = -currentIndex * 100 + '%';
    return { transform: `translateX(${translateValue})` };
  };

  return (
    <div className='slideshow'>
      <div className='slideshow__container' style={updateSlide()}>
        {slides.map((slide, index) => (
          <img
            key={index}
            className='slideshow__img'
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;