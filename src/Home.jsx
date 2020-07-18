import React from 'react';
import web from '../src/images/webxx.png';
import { NavLink } from 'react-router-dom';
import Common from './Common.jsx';
const Home = () => {
  return (
    <>
        <Common name="Grow your business with" imgsrc={web} btnname="Get Started" visit="/service" />
    </>
  );
}

export default Home;
