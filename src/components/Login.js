import './Login.css'
import { useNavigate } from 'react-router-dom'


function Login() {
    const nav = useNavigate();
    function Navigate() {
        let user = document.getElementById('username');
        let pass = document.getElementById('password');
        if(user.value !== '' && pass.value !== '')
        {
            nav('/Home');
        }
        else{
            alert('Error!!');
            user.value ='';
            pass.value = '';
        }
    }
     
    return(
        <>
            <div className="top-section">
                <h1>VaultCoin</h1>
            </div>
            <div className="login-container">
            <h2>Login</h2>
            <div className="input-group">
                <label >Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
                <label >Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            
            <button  className="login" onClick={Navigate} type="submit" >Login</button>
            
           
            
            
            
        </div>
        </>
    )
}
export default Login