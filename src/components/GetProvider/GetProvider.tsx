import React, {FC, useState, useEffect} from 'react'
import './GetProvider.css'
import { getDataFromIp } from '../../utils/getDataFromIp'
import axios from 'axios'
import { IResponse } from '../../interfaces/IResponse'

const GetProvider:FC = () => {

const [ip, setIp] = useState('')
const [response, setResponse] = useState<IResponse>({city: '', country: '', status: '', isp: ''})



 // getDataFromIp('31.148.147.172');
// `IP: ${ip}\nСтрана: ${response.data.country_name}\nПровайдер: ${response.data.isp}\nСтатус: ${response.data.response_message}`

const fetchIp = (ip: string) => {
    fetch(`http://ip-api.com/json/${ip}`)
    .then(response => response.json())
    .then(data => setResponse(data));
console.log(response)
}


useEffect( () => {

    // if (ip) {
    //     fetch(`http://ip-api.com/json/${ip}`)
    //     .then(response => response.json())
    //     .then(data => setResponse(data));

    //     if (response) {
    //         console.log(response)
    //     }
     //   }
     
    // fetch('https://api.npms.io/v2/search?q=react')
    
//     const getData = async () => {
//         const API_CALL = await fetch(`https://api.iplocation.net/?ip=31.148.147.172`); 
//         const DATA = await API_CALL.json();
//         console.log(DATA);
//     }
//  getData()
  }, []);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetchIp(ip);
  };
  return (
    <div className='ipInfo'>
        <input
        value={ip}
        onChange={(e) => setIp(e.target.value)}
         type="text" name="ip" placeholder='Enter IP' />
        <button
        className='btn pointer'
        disabled={!ip}
         onClick={buttonHandler}
        type='button'
        >GET INFO</button>

      {response.isp ? <p className='white'>Provider: {response.isp}
      <br />
      Country: {response.country} <br />
      City: {response.city} <br />
      Status: {response.status}
      </p> : ''}

    </div>
  )
}

export default GetProvider