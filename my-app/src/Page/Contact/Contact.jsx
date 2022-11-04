import React from "react";
import Header  from './ContComponents/Header/Header'; 
import Footer from './ContComponents/Footer/Footer'; 
import Page_header from './ContComponents/Page-header/Page-header'; 
import Contact_details from './ContComponents/Contact-details/Contact-details'; 
const Contact = () => {
  return (
    <div>
      <Header/>  
      
      <Page_header/>
      <Contact_details/>
      <Footer/> 
    </div>
  );
};
 
export default Contact;