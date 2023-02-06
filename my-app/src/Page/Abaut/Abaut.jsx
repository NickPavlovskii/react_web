import React from "react";

import Page_header from './AboutComp/Page-header/Page-header'; 
import AboutSection from './AboutComp/AboutSection/AboutSection'; 
import AboutApp from './AboutComp/AboutApp/AboutApp'; 
import Newsletter from '../Home/ComponentsHome/Newsletter/Newsletter'; 
import Feature from './AboutComp/Feature/Feature'; 
const About = () => {
  return (
    <div>
   
      
      <Page_header/>
      <AboutSection/>
      <AboutApp/>
      <Feature/>
    <  Newsletter/> 
      
    </div>
  );
};
 
export default About;