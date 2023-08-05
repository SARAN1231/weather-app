import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_comp/Weather';
import { useState } from 'react';
import axios from "axios";
 


function App() {
  const [data,setdata] = useState({});
  const [location,setlocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=afc6f5d1df1cbb1564ae527dfd4a26d9`;

  const searchlocation = (e) => {
    if(e.key === 'Enter'){
      axios.get(url).then((Response) =>{
        setdata(Response.data)
        console.log(Response.data)

      })
      setlocation('')
    }
  }
   return (
    <div className="App">
    <Weather 
    searchlocation = {searchlocation}
    location={location}
    setlocation={setlocation}
    data={data}
    setdata={setdata}
  
    />
    </div>
  );
}

export default App;
