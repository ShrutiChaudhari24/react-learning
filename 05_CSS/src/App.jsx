import React from 'react'
import Button from "./components/button/Button";
import Header from "./components/header/Header";
// yaha render kiya ess liye collide ho gaya dono ki css ki property collide ho gai

const App = () => {
  return (
    <div>
      <Header />
      <Button />
    </div>
  )
}

export default App