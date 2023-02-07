import React from 'react';
import './Blog.css'




const Blogs = ({blogItems}) => {

  return (
    <> 
    
    <section id="page-header " className=" blog-header">
      <h2> #ReadMore</h2>
      <p>Read allcase about our product</p>
   </section>
   <section id='blog'>

   {blogItems.map((blogItems, blogIndex)=>{
            return (
    <div className="blog-box">
      <div className="blog-img">
      <img src={blogItems.img} alt="" />
      </div>
      <div className="blog-details">
      <h3>{blogItems.title}</h3>
      <p>{blogItems.subtitle}</p>
      <a href="#" className='cont'>CONTINUE READING</a>
      </div>
      <h1>{blogItems.data}</h1>
    </div>
            )})}
   </section>
  
   </>
   
  );
};
 
export default Blogs;