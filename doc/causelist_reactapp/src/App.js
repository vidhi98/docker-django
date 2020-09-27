import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import "./index.css";
import Baselayout from './Components/Baselayout/Baselayout';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Baselayout/>
      </div>
      </BrowserRouter>
  );
}

export default App;
