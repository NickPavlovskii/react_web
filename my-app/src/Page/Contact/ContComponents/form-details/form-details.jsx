import React from 'react'
import './form-details.css'

export const Form_details = () => {
  return (
   <section id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className='normal' >submit</button>
        </form>
            <div className='people'>
            <div>
                <img src="../../../../img/people/1.png" alt="" />
                <p><span>Jhon Doe</span>Senior Marciting Manager <br/>Phone:+7 123 000 77 88<br/>Email: contact@mail.ru</p>

            </div>
            <div>
                <img src="../../../../img/people/2.png" alt="" />
                <p><span>Niklad Pavlovskii</span>Senior Marciting Manager <br/>Phone:+7 988  568 78 18<br/>Email: contact@mail.ru</p>

            </div>
            <div>
                <img src="../../../../img/people/3.png" alt="" />
                <p><span>Emma Stone</span>Senior Marciting Manager <br/>Phone:+7 123 830 17 18<br/>Email: contact@mail.ru</p>

            </div>

            </div>
</section>
  )
}

export default Form_details;