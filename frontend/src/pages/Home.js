import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Education from '../components/Education';
import Languajes from '../components/Languajes';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Education />
      <Languajes />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;
