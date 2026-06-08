import React from 'react'
import {Route,Routes } from "react-router-dom"; // routes is basically a container jis kae ander hamerae sare routes rahene wale hai hamere 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


// Route ye basically har ek particular route kae liye kam karega aur routes jo hai basically ye container hai jis kae ander sub rahene wale hai

// App.jsx ka parent kon tha main.jsx tho jao main.jsx mae  
const App = () => {
  return (
    <div>
      {/*ager hum yaha koi NavBar banaye n tho ye hr page pae aayega kyaki srf Routes wala hi section change hoga  */}
      {/* ager ye ease banaya tho reloading ho rahi hai jo ki acchi chij nahi hai humey tho SPA banana hai */}
      {/* <div className='nav'>
        <h3>Hello</h3>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div> */} 
      {/* tho ye pure ko component mae dal doo */}

      <Navbar/>
      
      {/* abb humey yaha pae banane pagenge routes */}
      <Routes>
        {/* Routes is a container jis kae ander sare route hai aur Route is a self closing tag jis kae ander hum path aur element detae hai */}
          <Route path='/' element={<Home/>}/>   
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

      </Routes>

    </div>  
  )
}

export default App

/* =======================================================================
                1) Browser Router (bhot jyada use karte hai 90%)
  ========================================================================
  Browser mae history ko save karke rakhta hai
  ess mae hum basically easae likh paate hai
  jis ka route banana hai = kya route banana hi
  leetcode.com = /
  leetcode.com/problemset = /problemset
  leetcode.com/contest = /contestS


  ============================================================================================================
                2) Hash Router (jyada use nahi karte karte hai but jab hidden rakhna hai route ko tab)
  =============================================================================================================

  ess mae hum basically easae likh paate hai
  jis ka route banana hai = kya route banana hi
  same Browser router jese hi likhte hai bas phele hash aa jata hai 
  server ko pata nahi chalta ki hum konse router ki baat kar rahe hai
  // basically ager hidden rakhna chate hai tho hash router ka use karte hai
  leetcode.com = /#/
  leetcode.com/problemset = /#/problemset
  leetcode.com/contest = /#/contestS

  =======================================================================
                3) Memory Router
  ========================================================================
  Browser mae history ko save karke rakhta hai, memory router jo hota hai vo basically memory mae chijo ko save karke rakhta hai tho yaha history ka jyada role nahi hota
  react native mae jyada use hota hai

  =======================================================================
                3) static Router
  ========================================================================
  static router basically static site generation mae help karta hai tho nextjs, remixjs en sub mae static router use hota hai


*/ 