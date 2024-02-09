import { useState } from 'react';

function Slideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt="Project Screenshot"
        className="w-full object-cover cursor-pointer"
        onClick={nextImage}
        style={{ height: '250px' }} 
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-1 text-center">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default Slideshow;