import React, { createContext, useState } from 'react'

// step 1 :- Create karo context import bhi karna hota hai
// export const ThemeDataContext = createContext() //  -> context ban kae tayar hai ess ko kisi variable mae store kar diya
// ThemeContext ess file ka nam tha ThemeDataContext basically data ko provide karega jaghe jaghe ja kae
// abb humney Context ko create tho kar diya lekin humey essko export bhi karna pedega taki koi bhi ess ko bhar access kar paye

// humey tho theme change karne wala part banana tha n tho vo karte hai
export const ThemeDataContext = createContext(); // setp 1

const ThemeContext = (props) => {

    // abb humey data pass karna hai step 2 tho App.jsx mae karne ka kam hi nahi hai
    const [theme, setTheme] = useState('light')
  return (
    <div>
        {/* ye likhne pae humey ThemeContext nahi usska children dikhayi dega */}
        {/* {props.children} */}

        {/* step 2 -> data provide karo    .Provider is the method*/}
        {/* <ThemeDataContext.Provider data ='Hey'> ye data humney provide kiya Navbar.jsx mae jao aur data ko use karo which is our step 3  */}
            {/* {props.children} */}
        {/* </ThemeDataContext.Provider> */}

        {/* theme akela bhajna hai tho theme akela bhaj doo ager setTheme bhi bhajna hai tho array bana kae dono ko bhaj doo */}
        <ThemeDataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>

    </div>
  )
}

export default ThemeContext