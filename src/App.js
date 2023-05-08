import { useState, useEffect } from 'react';
import './App.css';
import icon from "../src/images/icon-arrow.svg"
import axios from 'axios';

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState()
  const [ipAddress, setIpAddress] = useState('')

  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v1', {
      params: {
        apiKey: 'at_BBkFUdo1GOiRx7wzIZzED6fgd5rBG',
        ipAddress: ipAddress
      }
    })
    .then(response => setData(response.data));
  }, [ipAddress]);

  function handleChange(event){
    event.preventDefault();
    const getInput= event.target.value;
    setInput(getInput);
    console.log(getInput)
  }

  function handleClick(){
    setIpAddress(input)
    setInput('')
  }

  console.log(data)

  return (
    <>
      <div className='wrapper'>
        <h1 className='test'>IP Address Tracker</h1>
        <div className='input-wrapper'>
          <input value={input} placeholder='Search for any IP address or domain' className='input-box' onChange={(event)=>handleChange(event)}></input>
          <div className='button' onClick={handleClick}>
            <img src={icon} alt='icon' ></img>
          </div>
        </div>
        <div className='info-wrapper'>
          <div className='info-box'>
            <div className='box'>
              <p className='info-head'>IP ADDRESS</p>
              <p className='info-text'>{data?.ip}</p>
            </div>
            <div className='devided-line'></div>
            <div className='box'>
              <p className='info-head'>LOCATION</p>
              <p className='info-text'>{data?.location?.city}, {data?.location?.country}</p>
            </div>
            <div className='devided-line'></div>
            <div className='box'>
              <p className='info-head'>TIMEZONE</p>
              <p className='info-text'>{data?.location.timezone}</p>
            </div>
            <div className='devided-line'></div>
            <div className='box'>
              <p className='info-head'>ISP</p>
              <p className='info-text'>{data?.isp}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
