import './App.css';
import icon from "../src/images/icon-arrow.svg"


function App() {
  return (
    <>
      <div className='wrapper'>
        <h1 className='test'>IP Address Tracker</h1>
        <div className='input-wrapper'>
          <input placeholder='Search for any IP address or domain' className='input-box'></input>
          <div className='button'>
            <img src={icon} alt='icon'></img>
          </div>
        </div>
        <div className='info-wrapper'>
          <div className='info-box'>
            <div className='box'>
              <p className='info-head'>IP ADDRESS</p>
              <p className='info-text'>192.212.174.101</p>
            </div>
            <div className='devided-line'></div>
            <div className='box'>
              <p className='info-head'>LOCATION</p>
              <p className='info-text'>Brooklyn, NY 10001</p>
            </div>
            <div className='devided-line'></div>
            <div className='box'>
              <p className='info-head'>TIMEZONE</p>
              <p className='info-text'>UTC-05:00</p>
            </div>
            <div className='devided-line'></div>
            <div className='box'>
              <p className='info-head'>ISP</p>
              <p className='info-text'>SpaceX Starlink</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
