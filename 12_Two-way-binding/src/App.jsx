import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState(''); // title ki initial state hai kahli string

  const SubmitHandler= (e) =>{
    e.preventDefault();
    console.log("Form Submitted by ", title);

    setTitle(""); // hameri adat hai ki jab bhi hum koi form sumbit karte hai tho hum chate hai ki reload jesa ho jaye tho yaha hum setTitle() ki value wapis empty kar doo vo title mae chali jayegi aur input box fir sae khali ho jayega basic sae logic hai
  }

  return (
    <div>
        <form onSubmit={(e) =>{
          SubmitHandler(e); 
        }}>
        <input 
        type="text"
        placeholder='Enter your name' 
        // value basically batata hai ki input ki current value kya hai
        value={title}

        // jab input kae ander hum kuch likte hai tho event chalta hai onChange
        onChange={(e)=>{ // onChange pae ye function chalta hai jab bhi koi change hoga print hote huye dikheaga
          // console.log(e.target.value)
          setTitle(e.target.value);
        }}
        />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App