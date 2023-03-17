import React, { useMemo, useState } from 'react';
import axios from 'axios';
import SelectItem from "./components/UI/select/SelectItem";
import PostList from "./components/PostList";
import Post from './components/Post';
import api_r from './responce'

function App() {

  const API_KEY = '1ee60e113198511d041b46ab8605b35a'

  const locations = [{ id: 1, title: 'Москва', lat: '55.44', lon: '37.36' },
  { id: 2, title: 'Санкт-Петербург', lat: '59.56', lon: '30.19' },
  { id: 3, title: 'Екатеринбург', lat: '50.56', lon: '60.35' },]

  const [value, setValue] = useState('')
  const [responce, setResponce] = useState('')


  const getCoord = useMemo(() => {
    if (value) {
      return [locations.find(item => item.title === value).lat, locations.find(item => item.title === value).lon]
    }
    return []
  }, [value])

  async function fetchWeather() {
    const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${getCoord[0]}&lon=${getCoord[1]}&appid=${API_KEY}&units=metric`)
    setResponce(responce.data)
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
      />{value
        ? <div>
          <button onClick={fetchWeather}> Погода на сегодня </button>
          <button > Погода на пять дней </button>
        </div>
        : <h1 style={{ textAlign: 'center' }}> выберите город </h1>
      }
      <Post responce={responce} city={value} />
    </div>
  );
}

export default App;
