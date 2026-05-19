import React from 'react'
import Card from "./components/Card";

const App = () => {
  return (
    <div className='parent'>
      <Card user="Shruti Chaudhari" age={20} img ="https://plus.unsplash.com/premium_photo-1778573142747-8332b2c8fc4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      {/* <Card /> */ }
      {/* <Card /> */}

      {/* Abb cards tho humney multiple bana liye but humey un mae data alag alag chiye 
      tho hum kya karte hai hum data pass karte hai card mae kese?
      -> with the help of props 
      What is props?
      ->it's just a keyword
      And this concept is known as props drilling 
      means parent kae through child ko data bhajte hai
      and always remember data hamesaha upper sae niche ki taraf jata hai niche sae uper ki taraf nahi
      
      matlab App is parent and card is child tho hum hamesah parent sae child ki taraf data bhaj sakte hai
      */}
      <Card user ="Shri" age ="18" img ="https://images.unsplash.com/photo-1778431193202-b0e2345eeab9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
