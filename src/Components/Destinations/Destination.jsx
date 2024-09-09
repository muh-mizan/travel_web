import React from 'react'
import destinationCSS from './../Destinations/Destination.module.css'
import G from './../../assets/G.jpg'
import I from './../../assets/I.jpg'
import S from  './../../assets/S.jpg'
import n from './../../assets/n.jpg'
const Destination = () => {
  return (
    <div className= {'${destinationCSS.DestinationWrapper} section'} id='destination'>
      <div className="section_heading">
        <div>
        <h2>Popular Destinations</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <button><small>View All Destinations</small><i className='ri-arrow-right-up-line'></i></button>
      </div>

      <div className={destinationCSS.DestinationCards}>
        <div className={destinationCSS.DestinationCard}>
          <img src={n} alt="" />


          <div className={destinationCSS.Content}>
            <h2>Barcelona</h2>

            <button>Discover</button>
          </div>
        </div>




        <div className={destinationCSS.DestinationCard}>
          <img src={S} alt="" />


          <div className={destinationCSS.Content}>
            <h2>Sydney</h2>

            <button>Discover</button>
          </div>
        </div>


        <div className={destinationCSS.DestinationCard}>
          <img src={G} alt="" />


          <div className={destinationCSS.Content}>
            <h2>Germany</h2>

            <button>Discover</button>
          </div>
        </div>


<div className={destinationCSS.DestinationCard}>
          <img src={I} alt="" />


          <div className={destinationCSS.Content}>
            <h2>India</h2>

            <button>Discover</button>
          </div>
        </div>



</div>
    </div>
  )
}

export default Destination
