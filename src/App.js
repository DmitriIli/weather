import React, { useState } from "react";
import SelectItem from "./components/UI/select/SelectItem";

function App() {
  // const API_KEY = `${API_KEY}`

  const locations = [{ id: 1, title: 'msk', subscrib: 'Москва', lan: '55.44', lot: '37.36' },
  { id: 2, title: 'spb', subscrib: 'Санкт-Петербург', lan: '59,56', lot: '30,19' },
  { id: 3, title: 'ekb', subscrib: 'Екатеринбург', lan: '50.56', lot: '60.35' },]

  const [value, setValue] = useState('')
  
  console.log(locations.find(item=> item.subscrib === value).subscrib)

  return (

    <div className="App">
      <h1 style={{textAlign:'center'}}>weather </h1>
      <hr style={{ margin: '15px 0' }} />
      <SelectItem
        options={locations}
        defaultValue='Город'
        value={value}
        onChange={setValue}
      />   
    {/* {value}
    {locations.find(item=> item.subscrib === value).lan} */}



    </div>
  );
}

export default App;
