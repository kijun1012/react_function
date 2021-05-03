import './App.css';
import List from './List';
import React, { useState } from 'react'
import Data from './Data';


function App() {

  const [datas, setdatas] = useState([
    { name: "0번" },
    { name: "1번" },
    { name: "2번" }
  ])

  const additionalDatas = [
    { name: "3번" },
    { name: "3번" }
  ]

  const handleClick = () => {
    setdatas(datas.concat(additionalDatas))
  }


  return (
    <div className="App">
      <button onClick={handleClick}>
        추가데이터
    </button>
      {datas.map((value, index) => (
        <Data data={datas[index]} />
      ))}
    </div>
  );
}

export default App;
