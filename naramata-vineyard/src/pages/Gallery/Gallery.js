import React from 'react';
import '../Gallery/Gallery.scss';

const Gallery = () => {
  // Number of placeholders
  const numPlaceholders = 12;
  const placeholderIndices = Array.from({ length: numPlaceholders }, (_, index) => index);

  return (
    <section className='gallery'>
        <h2 className='gallery__title'>Gallery</h2>
    <div className="gallery__container">
      {placeholderIndices.map((index) => (
        <div
          key={index}
          className="gallery__item"
          style={{ backgroundColor: '#a2bb99' }}>
        </div>
      ))}
    </div>
    </section>
  );
};
// plans to use JavaScript to make the gallery interactive once we have images
export default Gallery;
