import React from "react";
 import './Contact-details.css'
 import { BsMap} from 'react-icons/bs';
 import { AiOutlineMail ,  AiOutlinePhone, AiOutlineClockCircle} from 'react-icons/ai';
 import Maps from './Map'


const Contact_details = ( Status) => {

  return (
   <section id="Contact-details" className="section-p1">
        <div className="details">
            <span className="titlle">GET IN TOUCH</span>
            <h2>Vizit <span className="striped-shadow" >one</span> of our location or contact us today</h2>
            <h3>Head Office</h3>
            <div className="detailsli">
                <li >
                <i><BsMap/></i>
                <p>Санкт-Петербург пр-кт Ленина 71</p>
                </li>
                <li>
                <i><AiOutlineMail/></i>
                <p>o_oniklado_o@list.ru</p>
                </li>
                <li>
                <i><AiOutlinePhone/></i>
                <p>+7-988-362-07-88</p>
                </li>
                <li>
                <i><AiOutlineClockCircle/></i>
                <p>Mondoy to Sunday 8:00 - 18:00</p>
                </li>
            </div>
        </div>
          
    
        <Maps/>
   </section>
  );
};
 
export default Contact_details;
