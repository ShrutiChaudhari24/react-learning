import React, { useState } from 'react'

const App = () => {


  const [num, setNum] = useState(0)

  function CounterIncrease() {
    // console.log("Incerasing");
    setNum(num+1); // yaha num++ easa nahi likh sakte
  }

  function CounterDecrease() {
    // console.log("Decerasing");
    setNum(num-1); // yaha num-- easa nahi likh sakte
  }

  function jump5Num(params) {
    setNum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={CounterIncrease}>Increase</button>
      <button onClick={CounterDecrease}>Decrease</button>
      <button onClick={jump5Num}>Increase 5</button>

    </div>
  )
}

export default App