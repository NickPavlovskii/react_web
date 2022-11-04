
import './style/style.css';


import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/Abaut/Abaut';

import Contact from './Page/Contact/Contact';




function App() {
 


  
    
    return (
    <div>  
    
    

    <Router>
  
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/about' element={<About/>} />

        <Route path='/contact' element={< Contact/>} />
       
    </Routes>
    </Router>
      
    
    
    


    </div>
    
    )
}

export default App;
