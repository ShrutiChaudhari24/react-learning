import React from 'react'

const Navbar = (props) => {

    // console.log(props);
    
    function changeTheme(){
        props.setTheme('Dark')

    }

  return (
    <div>
        {/* props ek object hai tho uss sae value chiye tho (.) karke likh doo kya access karna hai */}
        {/* <p>{props.theme}</p> */}

        <button onClick={changeTheme}>Change Theme</button>

    </div>
  )
}

export default Navbar