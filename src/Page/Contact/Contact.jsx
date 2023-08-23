import React from "react";

import Page_header from './ContComponents/Page-header/Page-header'; 
import Form_details from './ContComponents/form-details/form-details'; 

import Contact_details from './ContComponents/Contact-details/Contact-details'; 
const Contact = () => {
  return (
    <>
    <div>
      
      
      <Page_header/>
      <Contact_details/>
      <Form_details/> 
  
    </div>
    </>
  );
};

export default Contact;