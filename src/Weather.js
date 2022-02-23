import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterIcon from '@mui/icons-material/Water';

export default function App({ temp, pressure, desc }) {
  return(
    <div className="weather-container">
      <div className="temp-container">
        <h3>Temperature</h3>
        <div className="temp-mini-container">
        <div className="temp-icon-container"><WaterIcon /></div>
        <h3>{temp}</h3>
        </div>
      </div>

      <div className="press-container">
        <h3>Pressure</h3>
        <div className="press-mini-container">
        <div className="press-icon-container"><CloudIcon /></div>
        <h3>{pressure}</h3>
        </div>
      </div>


      <div className="desc-container">
        <h3>Weather</h3>
        <div className="desc-mini-container">
        <div className="desc-icon-container"><WbSunnyIcon /></div>
        <h3>{desc}</h3>
        </div>
      </div>
    </div>
  );
}