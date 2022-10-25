import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhoto from './Components/NasaPhoto';

import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data}/> }
    </div>
  );
}

export default App;
