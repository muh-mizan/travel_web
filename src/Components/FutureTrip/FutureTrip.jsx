import React from 'react'
import futureTripCSS from './../FutureTrip/FutureTrip.module.css'

import w1 from './../../assets/w1.jpg'
import w2 from './../../assets/w2.jpg'
import w3 from './../../assets/w3.jpg'


const FutureTrip = () => {
  return (
    <div className={`${futureTripCSS.FutureTrip_Wrapper} section`}>

<div className={futureTripCSS.card}>
<div className={futureTripCSS.imgWrapper}>
<img src={w1} alt="" />
</div>
<h3>10 European Destinations</h3>
</div>


<div className={futureTripCSS.card}>
<div className={futureTripCSS.imgWrapper}>
<img src={w2} alt="" />
</div>
<h3>Booking Travel During Corona</h3>
</div>
      
<div className={futureTripCSS.card}>
<div className={futureTripCSS.imgWrapper}>
<img src={w3} alt="" />
</div>
<h3>Where can i go ?</h3>
</div>



    </div>
  )
}

export default FutureTrip
