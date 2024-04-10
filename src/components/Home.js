import './Home.css'
import image from '../a.png'
import { Link } from 'react-router-dom'
function Home() {
  
  
    return(
      <>
        <div className="top-section">
          <h1>VaultCoin</h1>
         
          
        </div>
        <div className="img">
            <img src={image} alt="Image"/>
        </div>
        <Link to="/Contact">
          <button className="start" >Enter</button>
        </Link>
        
        
  
        
  
      </>
    )
  
  }
  
  export default Home;