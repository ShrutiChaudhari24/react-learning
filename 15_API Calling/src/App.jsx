import React from 'react'
import axios from 'axios';
const App = () => {


    // 2 methods hai 1) fetch 2) axios
    // Fetch API (Built-in JavaScript)-> Ye browser ka built-in method hai, extra library ki zarurat nahi hoti webAPI kae through mil jati hai hamesha kae liye.
    // Axios (Popular Library) third perty API -> Axios ek external library hai jo API calls ko easier bana deti hai.

  // ye fetch ka use kar kae humney kiya 
  async function getData() {
    // console.log("Data aa gaya hai"); ye tho humney srf print kiya consol pae

    // humey tho data recieve karna hai API ko call karna hai 

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response);
  }

  // ye axios ka use kar kae humney kiya
  const getdata2 = async () =>{
    // const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    // console.log(response);

    // ya ease likh doo destructuring direct data chiye tho
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments');
    console.log(data); 
  }



  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getdata2}>Get Data axios</button>
    </div>
  )
}

export default App