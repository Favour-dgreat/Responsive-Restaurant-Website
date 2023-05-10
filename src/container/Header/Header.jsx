import React from 'react';
import { SubHeading } from '../../components';

import { images }from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app_wrapper_info'>
      {/* <SubHeading title="Chase the new flavour"/> */}
      <h1 className='app__header-h1'>Avril</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>I love good foods and good food love me too </p>
      <button type='button' className='custom__button'>Explore Meal</button>
    </div>

    {/* <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>
    </div> */}
  </div>
)

export default Header;
