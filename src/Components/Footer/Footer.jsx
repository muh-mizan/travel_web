import React from 'react'
import footerCSS from './../Footer/footer.module.css'
import app_store from './../../assets/app_store.png'
import play_store from './../../assets/play_store.png'
const Footer = () => {
  return (
<footer className={`${footerCSS.footerWrapper}`}>
<div className={footerCSS.banner}>
    <div className={footerCSS.content}>
        <i className='ri-newspaper-line'></i>
        <h2>Get the latest news and updates <span>Your Travel Journey Starts Here</span></h2>
    </div>
    <div className={footerCSS.form}>
        <input type="text" placeholder='Type Here Email'/>
        <button>Subscribe</button>
    </div>
</div>
<div className={footerCSS.FooterContainer}>
<div className={footerCSS.footerlinks}>
    <h3>Company</h3>
    <a href="#">About Us</a>
    <a href="#">Careers</a>
    <a href="#">Blog</a>
    <a href="#">Press</a>
    <a href="#">Gift Cards</a>
</div>
<div className={footerCSS.footerlinks}>
    <h3>Service</h3>
    <a href="#">Contact</a>
    <a href="#">Legal Notice</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Teams and Conditions</a>
    <a href="#">Sitemap</a>
</div>
<div className={footerCSS.footerlinks}>
    <h3>Other Service</h3>
    <a href="#">Car Hire</a>
    <a href="#">Activity Finder</a>
    <a href="#">Tour List</a>
    <a href="#">Flight Finder</a>
    <a href="#">Holiday Special</a>
    <a href="#">Cruise Ticket</a>
</div>
<div className={footerCSS.footerlinks}>
    <h3>Mobile</h3>
    <img src={play_store}/>
    <img src={app_store}/>
</div>
</div>
</footer>
  )
}

export default Footer
