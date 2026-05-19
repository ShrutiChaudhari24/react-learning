import React from 'react'
import Card from './components/card'  // jo hum components folder mae banate hai vo App.jsx mae import kar lete hai
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
        {/* <div className="card">
            <h1>Shruti Chaudhari</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iste!</p>
        </div> */}
        <Navbar />
        {Card()}
        <Card />
        <Card /> 
        {/* jinte bar likho utne bar dikhayi dega */}
        <Navbar />

        {/* ager humey card ko update karna hai tho kar sakte hai , nav ko update karna hai tho kar sakte hai baki chije affect nahi hongi */}
         
    </div>
  )
}

export default App