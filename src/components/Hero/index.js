import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer } from './HeroElements';

const Hero = () => {
  return (
   <HeroContainer>
    <Navbar />
    <HeroContent>
      <HeroItems>
        <HeroH1>Greatest Pizza Known to Man</HeroH1>
        <HeroP>Ready in Minutes</HeroP>
        <HeroBtn></HeroBtn>
      </HeroItems>
    </HeroContent>
   </HeroContainer>
  );
};

export default Hero;