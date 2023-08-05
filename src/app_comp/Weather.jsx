import React from 'react'
import axios from 'axios';
const Weather= ({data,setdata,location,setlocation,searchlocation }) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=afc6f5d1df1cbb1564ae527dfd4a26d9`;
  const handleclick = ()=> {
    if(location !== ""){
      axios.get(url).then((Response) =>{
        setdata(Response.data)
        console.log(Response.data)

      })
      setlocation('')
    }
  }
  
return (
    <><div className="col-md-3">
      <div className="search-bar ">
        <input
          autoFocus

          id='AddItem'
          type='text'
          placeholder='Enter Location'
          required
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          onKeyPress={searchlocation} />
          <button type="submit" onClick={handleclick} >search</button>
      </div>
      
    </div>
    <div className="container">
        <div className="row">

          <h1 className='color margin pb-5'>{data.name}</h1>
          <h5 className="py-4">
            <i className="wi wi-day-cloudy display-1 color mt-8"></i>
          </h5>
        
          
          
            <h3 >
          <div className='grid'>
            <div className="px-4 color ">
                 <p>Temp-{data.main ? <h1 className="py-2 color">{calcelsius(data.main.temp)}&deg;c</h1> : null}</p>
            </div>
              <div className="px-4 color ">
                <p>Feels Like- {data.main ? <p>{calcelsius(data.main.feels_like)}&deg;c</p> : null}</p>
              </div>
          </div>
          <div className="grid">       
              <div className="px-4 color  ">
                <p>Humidity-{data.main ? <p>{data.main.humidity}%</p> : null}</p>
              </div>
              <div className="px-4 color ">
                <p>Wind Speed-{data.main ? <p>{data.wind.speed}MPH</p> : null}</p>
              </div>
          </div>    
          <div className="px-4 color ">
                <p>{data.main ? <h1 className="py-2 color pt-0 mb-3 ">{data.weather[0].description}</h1> : null}</p>
          </div>
            </h3>
        

          
        </div>
      </div></>
  )
  
  function calcelsius(temp){
    const cell = Math.floor(temp-273.15)
    return cell;
  }
}

export default Weather