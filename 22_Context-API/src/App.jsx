import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import Button from './components/Button'

const App = () => {

  // const [theme, setTheme] = useState('light'); ye hum yaha banane hi nahi wale

  return (
    <div>
      {/* <Navbar theme = {theme}/> na hi ess theme ko yaha as a props send karenge */}
      <Navbar/>
      <Button/>

      {/* Tho ye basic concept tha childrens kae through chijo ko kis tarah sae pass karte hai */}
        {/* ager humney Navbar ko self closing na bana kae easa banaya hota */}
        {/* <Navbar theme = {theme}></Navbar>  */} {/* easa karne pae abhi bhi yaha same chij aarahi hai */}

        {/* lekin ager ap ka mann hai yaha pae kuch data likhne ka */}
        {/* <Navbar theme ={theme}> */}
          {/* <h2>This is Navbar</h2>for example yaha menae banaya ek h2 tho abb ap ko kya dikha ab ap ko dikha children children humey batayega ki ye jo nav name ka component hai uss ka koi children exist karta hai ya nahi aur ager uss ka koi children exist karta hai tho uss kae ander kya hai  */}
          {/* <h2>Bhot accha navbar</h2> */}
          {/* ager ek children hota tho boject dikhai det uss ka ager 1 sae jyada honge tho array of objects dikhai dega */}
          {/* matlab kya ki jab bhi hum koi component banate thae tho hum component ko self closing Tag ki tarah likhte thae tho ager hum ess ko self closing likhne ki jaghe ager ease likhe*/}
        {/* </Navbar> */}
     
    </div>
  )
}

export default App
