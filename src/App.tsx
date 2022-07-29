import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link, useParams  } from 'react-router-dom';
import './App.css';
import './App.css';    
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import About from './pages/About';
import Head from './pages/Head';
import Foot from './pages/Foot';
import ScrollToTop from './ScrollToTop';
function App() {
  const [theme, setTheme]:any = useState('dark');
  
   useEffect(() => {
     var t:any= localStorage.getItem("data-theme") ;
     setTheme(t);
     document.documentElement.setAttribute("data-theme", t) ;
   }, [])
  
  
  
  function Changetheme(){
    if(document.documentElement.getAttribute("data-theme") === "light"){
      document.documentElement.setAttribute("data-theme", "dark") ;
      localStorage.setItem("data-theme", 'dark') ;
    }
    else{
      document.documentElement.setAttribute("data-theme", "light") ;
      localStorage.setItem("data-theme", 'light') ;
    }
  }

  
   
  return (
    
    <div className="App bg-primary  text-fontcolor ">
      
    <Helmet>
                <meta charSet="utf-8" />
                <title>Amith Jayapraban</title>
                <link rel="icon"  href="https://avatars.githubusercontent.com/u/89343885?v=4"/> 
                <meta name="description" content="Frontend developer from Kerala, India 🇮🇳" />
                <meta name="theme-color" content='#34c592' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name ="robots" content="index,follow"  />
                <meta name="googlebot" content="index,follow"/>
                <link rel="canonical" href="http://amithjayapraban.tk" /> 
            </Helmet>
        <Router>
        
        <Head Changetheme={Changetheme} />
        
        
        <Routes>
          
          <Route  path="/" element={<Home />} /> 
          <Route  path="/about" element={<About />} /> 
        </Routes>
         
       
          {/* <Foot/> */}
          
        
        </Router>
    </div>
    
    
  )
}

export default App
