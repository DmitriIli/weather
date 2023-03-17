import React, { useMemo, useState } from "react";
import axios from 'axios';
import SelectItem from "./components/UI/select/SelectItem";
import PostList from "./components/PostList";



function App() {

  const locations = [{ id: 1, title: 'Москва', lat: '55.44', lon: '37.36' },
  { id: 2, title: 'Санкт-Петербург', lat: '59.56', lon: '30.19' },
  { id: 3, title: 'Екатеринбург', lat: '50.56', lon: '60.35' },]

  const [value, setValue] = useState('')

  const API_KEY = '1ee60e113198511d041b46ab8605b35a'

  const getCoord = useMemo(() => {
    if (value) {
      return [locations.find(item => item.title === value).lat, locations.find(item => item.title === value).lon]
    }
    return []
  }, [value])
  async function fetchWeather() {
    console.log(getCoord)
    const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${getCoord[0]}&lon=${getCoord[1]}&appid=${API_KEY}`)
    console.log(responce.data)
  }
  const posts=[]

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
      { value 
        ?<button onClick={fetchWeather}> get object</button>
        : <h1 style={{textAlign:'center'}}> выберите город </h1>
      }
      
      <PostList posts={posts} />
    </div>
  );
}

export default App;
