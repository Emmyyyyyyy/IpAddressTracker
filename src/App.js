import { useState, useEffect } from 'react';
import './App.css';
import iconArrow from "../src/images/icon-arrow.svg"
import iconLocation from '../src/images/icon-location.svg';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState()
  const [ipAddress, setIpAddress] = useState('')
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const markerOptions = new L.Icon({
    iconUrl: iconLocation,
    iconRetinaUrl: iconLocation,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],
  });

  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v1', {
      params: {
        apiKey: 'at_BBkFUdo1GOiRx7wzIZzED6fgd5rBG',
        ipAddress: ipAddress
      }
    })
    .then(response => setData(response.data));
    setLat()
    setLng()
  }, [ipAddress]);

  useEffect(()=>{
    setLat(data?.location?.lat)
    setLng(data?.location?.lng)
  }, [data])

  function handleChange(event){
    event.preventDefault();
    const getInput= event.target.value;
    setInput(getInput);
    // console.log(getInput)
  }

  function handleClick(){
    setIpAddress(input)
    setInput('')
  }

  return (
    <>
      <div className='wrapper'>
        <h1 className='test'>IP Address Tracker</h1>
        <div className='input-wrapper'>
          <input value={input} placeholder='Search for any IP address or domain' className='input-box' onChange={(event)=>handleChange(event)}></input>
          <div className='button' onClick={handleClick}>
            <img src={iconArrow} alt='icon' ></img>
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
        {lat ? <MapContainer center={[lat, lng]} zoom={13} style={{ height: '70%', width: '100%', position: 'absolute', zIndex: '-1', bottom: '0' }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lat, lng]} icon={markerOptions} />
        </MapContainer> : ''}
      </div>
    </>
  );
}

export default App;
