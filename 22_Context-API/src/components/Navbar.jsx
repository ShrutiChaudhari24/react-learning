import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
// import { ThemeDataContext } from '../context/ThemeContext'

// const Navbar = (props) => { props ka bhi kam nahi hai tho uss ko bhi hata doo 
    const Navbar = () => {
    // ager humney props ko print karwaya tho {theme: 'light', children: Array(2)}  humey easa milega console pae
    // console.log(props); 

    // ager easa likha 
    // console.log(props.children); // then you will get array of objects
    
    // step 3 :- yaha hum use kar rahe hai context 
    // const data = useContext(ThemeDataContext);

    // console.log(data);

    const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
        {/* <h2>Hello</h2> */}
        {/* <h2>{data}</h2> */}
        {/* if we want to print  */}
        {/* {props.children[0]}
        {props.children[1]} */}
        {/* <Nav2 theme = {props.theme}/> abb navbar kae ander ja kae bhi humey theme ka kuch kam nahi hai */}
        <Nav2/>
    </div>
  )
}

export default Navbar