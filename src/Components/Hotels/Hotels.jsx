import React from 'react'
import hotelsCSS from './../Hotels/Hotels.module.css'
import img1 from './../../assets/img1.jpg'
import img2 from './../../assets/img2.jpg'
import img3 from './../../assets/img3.jpg'
import img4 from './../../assets/img4.jpg'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {Autoplay} from 'swiper/modules'


const Hotels = () => {
  return (
    <div className={`${hotelsCSS.HotelsWrapper} section`} id='recommended'>
      
      <div className="section_heading">
        <div>
        <h2>Recommended Hotels</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <button><small>View All Hotels</small><i className='ri-arrow-right-up-line'></i></button>
      </div>

      <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
      }}
     
         loop={true}
         modules={[Autoplay]}
         breakpoints={{
               0:{
                slidesPerView:1
               }
               ,
               768:{
                slidesPerView:2
               },
               1024:{
                slidesPerView:3
               },
               1200:{
                slidesPerView:3
               }
         }}
      className={hotelsCSS.swiper}>
        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
<img src={img1} alt="" />
          </div>
          <h3>A Mountclam At Barcelona</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
              <img src={img2} alt="" />
          </div>
          <h3>Stay At Sydney</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
<img src={img3} alt="" />
          </div>
          <h3>Stay At German</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>





        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
<img src={img4} alt="" />
          </div>
          <h3>Stay At India</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
<img src={img1} alt="" />
          </div>
          <h3>A Mountclam At Barcelona</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
              <img src={img2} alt="" />
          </div>
          <h3>Stay At Sydney</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
<img src={img3} alt="" />
          </div>
          <h3>Stay At German</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>





        <SwiperSlide>
          <div className={hotelsCSS.card}>
          <div className={hotelsCSS.imgWrapper}>
<img src={img4} alt="" />
          </div>
          <h3>Stay At India</h3>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
          <p><span>4.7</span> Exceptional 3024 Rating</p>
         <h4>Starting from <span>$1200</span></h4>
          </div>
        </SwiperSlide>

     
</Swiper>
    </div>
  )
}

export default Hotels

