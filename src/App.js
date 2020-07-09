import React from 'react';
import NexmoClientWidget from './components/NexmoClientWidget';
import LoggedArea from './components/LoggedArea';
import './App.css';

const TOKEN = "<YOUR_TOKEN>"

function App() {
  return (
    <div className="App">
      {/* <NexmoClientWidget token={TOKEN}  /> */}
      <LoggedArea />
    </div>
  );
}

export default App;