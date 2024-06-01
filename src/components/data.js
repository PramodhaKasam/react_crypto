import './data.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Data()
{

    let url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";
    let [data, setData] = useState(null);

    useEffect(
      () =>{
        async function GetFacts() {
          console.log("Fetching data.....");
          try{
            const chakri = await fetch(url)
            const info =  await chakri.json();
            setData(info[0]);
          }
          catch(error){
            console.log(error);
          }
      }
        GetFacts();
       
      },[])
      
    console.log(data);
      
    if(!data) return (
        <p className='wait'>Please wait</p>
    );
    
    return (
        <>
            <div className="top-section">
                <Link to='/Home'>
                    <h1>VaultCoin</h1>
                </Link>
             </div>
             <div className="App">
                <div className='ques'>
                    <p className='que'>Name</p>
                    <p className='que'>Symbol</p>
                    <p className='que'>Current Price(in dollars)</p>
                    <p className='que'>atl</p>
                    <p className='que'>ath</p>
                    <p className='que'>Supply in market</p>
                    <p className='que'>Maximum supply in market</p>
                </div>
                <div className='anses'>
                    <p className='ans-1'>{data.id}</p>
                    <p className='ans-2'>{data.symbol}</p>
                    <p className='ans-3'>{data.current_price}</p>
                    <p className='ans-4'>{data.atl}</p>
                    <p className='ans-5'>{data.ath}</p>
                    <p className='ans-6'>{data.total_supply}</p>
                    <p className='ans-7'>{data.max_supply}</p>
                </div>
            </div>
            <Link to='/Contact'>
             <button className='go'>Go back to transacction</button>
            </Link>
           
        </>
    )
}

export default Data;