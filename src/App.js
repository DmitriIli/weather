import React, { useState } from 'react';
import axios from 'axios';
import InputItem from './components/UI/input/InputItem';
import "./styles/App.css";
import ButtonItem from './components/UI/button/ButtonItem';


function App() {
  const API_KEY = '1ee60e113198511d041b46ab8605b35a'

  const [value, setValue] = useState('')
  const [responce, setResponce] = useState({ responce: '', e: '' })


  async function fetchOneDay(e) {

    try {
      e.preventDefault()
      const responce = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value},ru&appid=${API_KEY}&units=metric&lang=ru&cnt=1`)
      setResponce({ responce: responce, e: 'true' })

    } catch (e) {
      console.log(e)
      setResponce({ e: '' })
    }
  }

  async function fetchFiveDay(e) {
    try {
      e.preventDefault()
      const responce = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value},ru&appid=${API_KEY}&units=metric&lang=ru`)
      setResponce({ responce: responce, e: 'true' })

    } catch (e) {
      console.log(e)
      setResponce({ e: '' })
    }
  }

  function getWeatherList({ responce }) {
    if (responce) {
      let list = []
      for (let i = 0; i < 40;) {
        if (responce.data.list[i]) {
          list.push(responce.data.list[i])
          i = i + 8
        }
        else {
          return list
        }
      }
      return list

    }
    return []
  }
  if (responce) {
      console.log(getWeatherList(responce))
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>weather </h1>
      <form className='app_form'>
        <div className='app_form_input'>
          <InputItem
            value={value}
            type='text'
            placeholder='Название города'
            onChange={e => setValue(e.target.value)} />
        </div>
        <div className='app_form_button'>
          <ButtonItem onClick={fetchOneDay}> Погода на сегодня </ButtonItem>
          <ButtonItem onClick={fetchFiveDay}> Погода на пять дней </ButtonItem>
        </div>

        {
          responce.e
            ?
            <div>
              <<{getWeatherList(responce).map(day =>
                <div key={day.dt}>
                  {day.main.temp}
                </div>>
              )}>
            </div>
            :
            <div>
              Введите корректный запрос
            </div>
        }

      </form>

    </div>
  );
}

export default App;
