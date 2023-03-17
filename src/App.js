import React, { useMemo, useState } from "react";
import SelectItem from "./components/UI/select/SelectItem";
import axios from 'axios';



function App() {
  // const API_KEY = `${API_KEY}`

  const locations = [{ id: 1, title: 'Москва', lat: '55.44', lon: '37.36' },
  { id: 2, title: 'Санкт-Петербург', lat: '59.56', lon: '30.19' },
  { id: 3, title: 'Екатеринбург', lat: '50.56', lon: '60.35' },]

  const [value, setValue] = useState('')
  // const [data, setDate] = useState('')

  let lat = ''
  let lon = ''
  const API_KEY = '1ee60e113198511d041b46ab8605b35a'

  console.log('value: ', value)

  // async function fetchWeather(url){
  //   const responce = await axios.get(url)
  // }

  const getCoord = useMemo(() => {
    if (value) {
      lat = locations.find(item => item.title === value).lat
      lon = locations.find(item => item.title === value).lon
      return [lat, lon]
    }
    return []
  }, [value])

  async function fetchWeather() {
    const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${getCoord[0]}&lon=${getCoord[1]}&appid=${API_KEY}`)
    console.log(responce.date)
  }


  return (

    <div className="App">
      <h1 style={{ textAlign: 'center' }}>weather </h1>
      <hr style={{ margin: '15px 0' }} />
      <SelectItem
        options={locations}
        defaultValue='Город'
        value={value}
        onChange={setValue}
      />
      <button onClick={fetchWeather}> get object</button>
      {}
    </div>
  );
}

export default App;
