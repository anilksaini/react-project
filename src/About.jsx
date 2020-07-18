import React from 'react';
import computerr from '../src/images/computerr.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common.jsx';
const About = () => {
  return (
    <>
        <Common name="Welcome to" imgsrc={computerr} btnname="Contact Now" visit="/contact" />
    </>
  );
}

export default About;
