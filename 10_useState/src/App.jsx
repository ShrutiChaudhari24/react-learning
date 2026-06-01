import React from 'react'
import { useState } from 'react'

const App = () => {

/*  here what we are doing is we are directly interacting with DOM jo ki acchi baat nahi hai we are using react tho react sae bolo n karne ka
  // const a = 20;
  let a = 20;

  function ChangeA (){

    console.log(a); // phele wali a ki value

    //a = 30; // TypeError: Assignment to constant variable.
    // a = 30; tho change ho gai let likhne kae baad

    // aur acche sae change karna hai tho ease likh doo
    a++;

    console.log(a); // after change a ki value
  }
*/

// using useState hook
  const [num, setnum] = useState(10)
  const [username, setUsername] = useState("Shruti") // ager username change karna hai tho
  const [users, setUsers] = useState([10,20,30]);

  function ChangeNum() {
    setnum(30);
    setUsername("Shruti Chaudhari");
    setUsers([40,50,60]);
  }


  return (
    <div>
      <h1>Value of num is {num} <br /> value of user is {username} <br />value of users array is {users}</h1>
      {/* <button onClick={ChangeA}>Click</button> */}
      <button onClick={ChangeNum}>Click</button>
    </div>
  )
}

export default App