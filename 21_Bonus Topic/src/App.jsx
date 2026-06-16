import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  // yaha hamere pass ek variable hai 
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1>Theme is {theme}</h1>

        {/* hum chate hai ki jo button Navbar kae ander hai hum uss pae click kare aur uss pae click karne pae theme change ho jaye matlab App.jsx ki chije change ho jaye */}
        
        {/* ager humey App.jsx sae Navbar mae kuch data bhajna hai tho hum bhaj sakte thae eg :- theme = {theme} variable */}
       
        {/* aur Navbar mae hum props kae through uss data ko recieve bhi kar sakte thae */}

        {/* <Navbar theme = {theme} />  ye tho huya uper sae niche ki taraf data bhajna */}

        {/* humey Navbar sae App mae bhajna hai tho uss ko ease karte hai */}
        <Navbar  theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App