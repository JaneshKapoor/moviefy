import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* Add more components like MoviesGrid here */}
    </div>
  );
};

export default Home;
