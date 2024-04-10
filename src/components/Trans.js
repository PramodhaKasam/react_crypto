import './Trans.css'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useState } from 'react';

   
let figure = JSON.parse(sessionStorage.getItem('figure'));
function Trans() {

    function Alert() {

        let fee = document.querySelector('.fees');
        if(fee.innerHTML === '0')
        {
            
            alert(`Re-check the amount.\nAnd click the button again`);
            updateFee1();
            
            
        }
        else if(fee.innerHTML === '00'){

            if(1.1*amount.value > figure){
                alert(`The total amount to be send is more than currency present in wallet.\nEnter a suitable value.`);
                amount.value = '';
            }
            else{
                updateTotal();
                updateFee();
                alert(`Check the total amount.\nAnd click again to proceed.`);
            }
            
            

        }
        else{
            alert('Transaction is successful ');
            updateFigure();
            amount.value = '';
            setFee(0);
            setTotal(0);
        }


       
    }
   
    let amount = document.getElementById('amount');
    if(!amount)
    {
        amount = '';
    }
    
   
    const [fee, setFee] = useState(0);
    const updateFee1 =() =>{
        
            setFee('00');
        

    
    
    } 
    const updateFee =() =>{
        
        setFee(0.1 * amount.value);
    



} 

    const [total, setTotal] = useState(0);
    const updateTotal =() =>{
        
            setTotal(1.1 * amount.value);
        
    
    

    } 
    
    let setFigure;
    [figure, setFigure] = useState(120);
    const updateFigure = () =>{
        
            setFigure(120-amount.value*1.1);

            SaveToStorage();

        
    }
    function SaveToStorage() {
        sessionStorage.setItem('figure', JSON.stringify(figure));
    }

    let params = useParams();
    let {name} = params;
     



    return(
        <>
           
                
            
            <h3 className='heading'>Transactions with {name} :</h3>
           <div className="top-section">
                <Link to='/Home'>
                    <h1 >VaultCoin</h1>
                </Link>
                
               
            
                <div className="money">
                    <h4 className='p'>Money present in wallet</h4>
                    <h3 className='figure'>{figure}BTC</h3>
                </div>
            </div>

            <div className="main">
               < div className="q-a">
                <div className='ques'>
                        <p className='label'>Amount :</p>
                        <p className='fee'>Transaction fee :</p>
                        <p className='total'>Total amount :</p>
                    </div>
                    <div className='ans'>
                        <input  id='amount' type='text' placeholder='(in BTC)' />
                        <p className='fees'>{fee}</p>
                        <p className='total-fee'>{total}</p>
                    </div>
               </div>
                <button className='ok' onClick={Alert}>Send</button>
                
            </div>
            <Link to='/Contact'>
                <button className='link'>Go for other transaction</button>
            </Link>
            
        </>
    )
}
export default Trans
