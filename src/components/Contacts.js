import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="top-section">
        <Link to='/Home'>
          <h1>VaultCoin</h1>
        </Link>
        
        
      </div>
      <button className="receiver-1">
        <h2 className='name'>Ravi</h2>
        <Link to="/Trans/Ravi">
          <button className="send">Send</button>
        </Link>
        
      </button>
      <button className="receiver">
        <h2 className='name'>Krishna</h2>
        <Link to="/Trans/Krishna">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Manisha</h2>
        <Link to="/Trans/Manisha">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Yodha</h2>
        <Link to="/Trans/Yodha">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Sati</h2>
        <Link to="/Trans/Sati">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Murali</h2>
        <Link to="/Trans/Murali">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Gautam</h2>
        <Link to="/Trans/Gautam">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Sahasra</h2>
        <Link to="/Trans/Sahasra">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Sundar</h2>
        <Link to="/Trans/Sundar">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Ganesh</h2>
        <Link to="/Trans/Ganesh">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Sita</h2>
        <Link to="/Trans/sita">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Balu</h2>
        <Link to="/Trans/Balu">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Seenu</h2>
        <Link to="/Trans/Seenu">
          <button className="send">Send</button>
        </Link>
      </button>
      <button className="receiver">
        <h2 className='name'>Laxmi</h2>
        <Link to="/Trans/Laxmi">
          <button className="send">Send</button>
        </Link>
        </button>
      <button className="receiver">
        <h2 className='name'>Sruthi</h2>
        <Link to="/Trans/Sruthi">
          <button className="send">Send</button>
        </Link>
      </button>
      
      

      

    </>
  )
}

export default Contact;
