import React, { useState } from 'react';

const Carousel = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="carousel relative w-full max-w-4xl mx-auto mt-6">
      <div className="carousel-item relative h-96 bg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          src="/trailers/movie1.mp4"
        ></video>
        <button
          className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-white"
          onClick={toggleMute}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-xl font-bold text-white">Dil Ko Tumse Pyaar Hua</h2>
          <p className="text-gray-300">2024 · Hindi · U/A 13+</p>
          <p className="text-gray-400 mt-1">Destiny’s ‘favourite child’ Deepika is let down by society’s stigma around beauty! But a new journey begins as prince-charming Dr. Chirag enters her life.</p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Book Tickets</button>
        </div>
      </div>
      {/* Additional carousel items can be added here */}
    </div>
  );
};

export default Carousel;
