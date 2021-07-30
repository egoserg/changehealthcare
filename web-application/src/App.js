import React, { useState, useRef } from 'react';
import axios from 'axios';
import env from "react-dotenv";

import Range from './components/Range';
import ErrorBox from './components/ErrorBox';
import './css/App.css';

const {API_URL} = env;

function App() {
  const [range, setRange] = useState(null);
  const [error, setError] = useState(null);

  const rangeSizeEl = useRef(null);

  const send = () => {
    axios.post(API_URL, {rangeSize: rangeSizeEl.current.value}, {headers: { "Content-type": "application/json" }})
    .then(response => {
      setError(null);
      setRange(response.data);
    })
    .catch(error => {
      setError(error.response.data.error || 'Something is wrong please try again');
      setRange(null);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-form'>
          <p>Please input the size range: </p>
          <input ref={rangeSizeEl} type="text" />
          <button onClick={send}>Get</button>
        </div>
        <ErrorBox error={error} />
        <Range range={range} />
      </header>
    </div>
  );
}

export default App;
