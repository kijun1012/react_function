import React, { Component } from 'react'


const List = ({ onClick }) => {
  return <div>
    <button onClick={() => onClick(0)}>index 0</button>
    <button onClick={() => onClick(1)}>index 1</button>
    <button onClick={() => onClick(2)}>index 2</button>
  </div>
}

export default List