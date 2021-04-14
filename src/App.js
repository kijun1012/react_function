import logo from './logo.svg';
import './App.css';
import List from './List';
import React, { useState } from 'react'
import Data from './Data';


function App() {

  const datas = [
    { name: "0번" },
    { name: "1번" },
    { name: "2번" }
  ]

  const [index, setIndex] = useState(0)

  const handleClick = (index) => {
    setIndex(index)
  }


  return (
    <div className="App">
      <List onClick={handleClick} />
      <Data data={datas[index]} />
    </div>
  );
}

export default App;
