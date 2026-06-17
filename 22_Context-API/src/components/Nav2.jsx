import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
// import { ThemeDataContext } from '../context/ThemeContext'

// const Nav2 = (props) => { props ka humey kuch kam hai hi nahi
   const Nav2 = () => {

    // const data = useContext(ThemeDataContext)

    // lets say humey Nav2 kae ander theme ko use karna hai 
    // const data = useContext(ThemeDataContext)
    const [theme,setTheme] = useContext(ThemeDataContext) // hum ess ko destructure bhi kar sakte thae

    // console.log(data); tho yaha humey data mae mila array aur array mae kya tha theme aur ek function(setTheme function hi tho tha n) 
    console.log(theme);

  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        {/* <h4>{data}Services</h4>  */}

        {/* Nav2 kae ander humey theme ka use karna hai */}
        {/* <h4>{props.theme}</h4> */}

        {/* yaha pae aake theme ko print kardiya */}
        <h4>{theme}</h4> 
        {/* lets say humney button.jsx name ka component banaya aur button kae click pae hum theme ko change karne wale hai */}
    </div>
  )
}

export default Nav2