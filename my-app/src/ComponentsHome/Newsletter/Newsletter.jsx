import React from 'react';
import "./Newsletter.css"

export const Newsletter = () => {
  return (
   <section id="Newsletter" className='section-p1'>
      <div className='newstext'>
            <h4>Sign up for Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>

      </div>
      <div className='form'>
        <input type="text" placeholder='You email address' />
        <button className='normal'>sign up</button>
        </div>   
</section>

  )
 

}

export default Newsletter;