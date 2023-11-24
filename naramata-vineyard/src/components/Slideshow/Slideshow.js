import React, { useState, useEffect } from 'react';
import './Slideshow.scss'; 
import slide1 from '../../assets/images/pool-and-lake.png';
import slide2 from '../../assets/images/vineyard-overlooking-lake.png';
import slide3 from '../../assets/images/vineyard-leafs.png';
import slide4 from '../../assets/images/cat-2.jpeg';
import slide5 from '../../assets/images/night-buddah.png';
import slide6 from '../../assets/images/sunset-barrels.png';


const Slideshow = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className='slideshow'>
      <img
        className='slideshow__images'
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
    </div>
  );
};

export default Slideshow;
