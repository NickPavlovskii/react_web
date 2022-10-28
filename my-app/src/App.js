
import './style/style.css';


import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home/Home';
import About from './Page/Abaut/Abaut';






function App() {
 


  
    
    return (
    <div>  
    
    

    <Router>
  
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/about' element={<About/>} />
       
    </Routes>
    </Router>
      
    
    
    


    </div>
    
    )
}

export default App;
