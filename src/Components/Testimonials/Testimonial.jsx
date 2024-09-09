import React from 'react'
import Testimonialcss from './../Testimonials/Testimonial.module.css'
import p1 from './../../assets/p1.jpg'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
const Testimonial = () => {
  return (
<div className={`${Testimonialcss.TestimonialWrapper} section`} id='testimonial'>
<div className={Testimonialcss.content}>
  <h2>What Our Clients Say ?</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
 <div className={Testimonialcss.Rating}>
    <div>
        <h3>13+ <span>Happy Clients</span></h3>
    </div>
    <div>
        <h3>4.8+ <span>Overall Rating</span></h3>
    </div>
 </div>
</div>
<Swiper className={Testimonialcss.swiper} 
                 loop={true}
                 modules={[Autoplay]}
                 autoplay ={{
                    delay:2500,
                 }}
                 >
    <SwiperSlide>
        <div className={Testimonialcss.Testimonial}>
            <div className={Testimonialcss.profile}>
                <img src={p1} alt="" />
                <h3>John Doe <span>ABC.SEO</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum magnam voluptates aliquid optio reiciendis.</p>
            </div>
            
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className={Testimonialcss.Testimonial}>
            <div className={Testimonialcss.profile}>
                <img src={p1} alt="" />
                <h3>John Doe <span>ABC.SEO</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum magnam voluptates aliquid optio reiciendis.</p>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className={Testimonialcss.Testimonial}>
            <div className={Testimonialcss.profile}>
                <img src={p1} alt="" />
                <h3>John Doe <span>ABC.SEO</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum magnam voluptates aliquid optio reiciendis.</p>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className={Testimonialcss.Testimonial}>
            <div className={Testimonialcss.profile}>
                <img src={p1} alt="" />
                <h3>John Doe <span>ABC.SEO</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum magnam voluptates aliquid optio reiciendis.</p>
            </div>
        </div>
    </SwiperSlide>

</Swiper>
</div>

  )
}

export default Testimonial
