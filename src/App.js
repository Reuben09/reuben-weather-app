import React from "react";
import { useState, useEffect} from "react";
import "./styles.css";
import Loading from "./Loading";
import Weather from "./Weather";



export default function App() {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("paris");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState();
  const [desc, setDesc] = useState("");

  const apiKey = "826d2128c73f42907ddda601b851d02f";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 const fetchWeather = async() => {
   setLoading(true);
  const response = await fetch(url);
  const weather = await response.json();
  setLoading(false);
   setDesc(weather.weather[0].description);
   setPressure(weather.main.temp);
   setTemp(weather.main.pressure);
}

 useEffect(()=>{
   fetchWeather();
 },[]);

  if(loading){
    return(
    <Loading />
    )
  }
  return(
    <main className="overall-container">
      <div className="input-container">
        <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} />
        <button type="submit" onClick={()=> fetchWeather()}>search city</button>
      </div>
    <Weather temp={temp} pressure={pressure} desc={desc} /> 
    </main>)
}
