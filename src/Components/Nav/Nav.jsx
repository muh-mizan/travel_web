import React, { useRef } from 'react'
import navCSS from './../Nav/Nav.module.css'
function Nav  () {
const Menu = useRef();
const NavHandler =() =>{
    Menu.current.classList.toggle(navCSS.activeNav);
}
  return (
    <div className={navCSS.NavWrapper}>
<div className={navCSS.ContainerNav}>
<div className={navCSS.logo}>
           <a href="">TravelwMe</a>
      </div>
      <ul ref={Menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#destination">Destination</a></li>
        <li><a href="#recommended">Recommended</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
      </ul>
</div>

<div className={navCSS.NavButton}>
    <button className={navCSS.button}>Sign Up</button>
    <i className='ri-menu-3-line' onClick={NavHandler}></i>
</div>


    </div>
  )
}

export default Nav
