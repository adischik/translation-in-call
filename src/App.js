import React from 'react';
import NexmoClientWidget from './components/NexmoClientWidget';
import './App.css';

const TOKEN = "<YOUR_TOKEN>"

function App() {
  return (
    <div className="App">
      <NexmoClientWidget token={TOKEN}  />
    </div>
  );
}

export default App;