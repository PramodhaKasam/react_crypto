import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Contact from './components/Contacts.js'
import Trans from './components/Trans.js'
import Login from './components/Login.js'
import Data from './components/data.js'

function App() {
  
  
  return(
    <>
      <div className='App'>
        <BrowserRouter>
        
          
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Trans/:name" element={<Trans/>}/>
            <Route path="/Data" element={<Data/>}/>
            

            
            
            
          </Routes>
        </BrowserRouter>
      </div>
      

      

    </>
  )

}

export default App;

