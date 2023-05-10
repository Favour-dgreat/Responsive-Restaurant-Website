import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Button } from 'react-bootstrap';

// import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => { 
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-log'>
      <p className='p__cormorant'>Logo</p>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>About us</a></li>
      <li className='p__opensans'><a href='#about'>Find Creatives</a></li>
      <li className='p__opensans'><a href='#menu'>Hire Creatives</a></li>
      <li className='p__opensans'><a href='#awards'>Jobs</a></li>
      {/* <li className='p__opensans'><a href='#contact'>Contact</a></li> */}
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>LogIn</a>
    <div/>
    <Button>SignUp</Button>
    {/* <a href='/' className='p__opensans'>Book Table</a> */}
    </div>
    {/* <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
         </ul>
      </div>
      )}
    </div> */}
    
  </nav>
);
}

export default Navbar;
