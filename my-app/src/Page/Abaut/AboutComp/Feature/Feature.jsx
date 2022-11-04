import React from 'react'
import img1 from '../../../../img/features/f1.png'
import img2 from '../../../../img/features/f2.png'
import img3 from '../../../../img/features/f3.png'
import img4 from '../../../../img/features/f4.png'
import img5 from '../../../../img/features/f5.png'
import img6 from '../../../../img/features/f6.png'

export const Feature = () => {
  return (
    <section id="feature" class="section-p1">
 
    <div class="fe-box">
        <img src={img1} alt=""/>
        <h5>Free shippig</h5>
    </div>
    <div class="fe-box"> 
        <img src={img2} alt=""/>
        <h5>Online Order</h5>
    </div>
    <div class="fe-box">
        <img src={img3} alt=""/>
        <h5>Save Money</h5>
    </div>
    <div class="fe-box">
        <img src={img4} alt=""/>
        <h5>Promotions</h5>
    </div>
    <div class="fe-box">
        <img src={img5} alt=""/>
        <h5>Happy Sell </h5>
    </div>
    <div class="fe-box">
        <img src={img6} alt=""/>
        <h5>24/7 Support </h5>
    </div>

</section>

  )
}

 
export default Feature ;