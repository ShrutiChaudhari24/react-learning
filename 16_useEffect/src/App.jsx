import React, { useEffect, useState } from 'react'

const App = () => {

  // lets say humney ek function banaya
/*  function random() {
    // console.log('hello');
    const a = Math.random();
    console.log(a);
    
  }

  //function automatically tho call nahi hoga tho humney uss function ko call kar diya
  random(); // wese react mae ease kabhi call karna bhi nahi chiye

  // ager hum UI mae kuch changes bhi kare tho bhi ye function wese hi chalega 
  // lekin ye react ki process kae sath chal raha hai humey ess ko side stack mae chalana hai
  // hum jitni bar chalayenge utni bar humey random values milengi 
  // ye galat tarika hai humey ess ko ease nahi chalana hai humey ess ko side by side chalana hai
  // tho side by side chalane kae liye hum udeEffect ka use karenge
*/

const [num, setNum] = useState(0);
const [num2, setNum2] = useState(100);

// --------------------------
//          use 1
// --------------------------
// ye useEffect callback mae ek function leta hai
/*useEffect(function() {
  console.log('use effect is running...'); 
})*/ // -> this is the first use of useEffect but this is wrong use this is also called as mounting but useEffect ess kae liye thodi na bana hai


// --------------------------
//          use 2
// --------------------------
/* ess ko aur better tarike sae kese kar sakte hai
// ess mae hum pass kar sakte hai dependencies
useEffect(function() {
  console.log('use effect is running...');
},[])
// yaha hum nae dal diya ek dependencies ka array jo ki abhi khali pada hai tho yaha pae hum button pae click bhi karenge state change bhi karenge tho bhi ye change nahi hoga useEffect srf ek hi bar chalega yane ki component did mount but only once
// tho hoga kya yaha pae jo bhi operation function kae ander likha hai vo faltu koi bhi state change hone pae nahi chelengi bas likhi huyi hai srf ek bar chelengi
// ye tha useEffect ka dusra use basically
*/

// --------------------------
//          use 3
// --------------------------

useEffect(function() {
  console.log('use effect is running...');
},[num])  // yaha humney num ko bana diya hai dependency tho jab num ki state change hogi tab hi useEffect chalega num2 ki state bhale hi change ho ye nahi chelega kyo? kyoki ye srf num pae dependent hai num2 pae nahi

  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      {/* yaha onClick ki jaghe onMouseEnter event chalate hai */}
      <button onMouseEnter={()=>{
        setNum(num+1);
        // setNum2(num2+10);
      }}
      onMouseLeave={()=>{
        setNum2(num2+10);
      }}
      >
        Hover</button>
    </div>
  )
}
export default App
