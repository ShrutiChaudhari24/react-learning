import React from 'react'

const App = () => {

  /* ease arrow function bhi bana sakte thae
  const btnClicked = ()=>{

   } */

  /* ya ease simple function bhi bana sakte hai */
  function btnClicked(){
    console.log('button is clicked')
  }

  // ager humey parameter pass karna ho tho kese karenge
  function userType (val) {
    console.log(val)
  } 
  
  // abb jese ek aur function banaya
  // function mouseEnter(){
  //   console.log('Mouse Entered');
  // }

  const pageScrolling = (elem) =>{
    if(elem > 0){
      console.log('seedha scrolling');
    }else{
      console.log('ulta scrolling');
    }
  }

  return (
    <div>
      <h1>Hey Shruti</h1>

      {/* abb lets suppose humey kuch karna hai ki example ki button kae click pae ye Hey all likha huya change karna hai tho vo hum kese karenge */}
      {/* hum easa karte thae event listner laga kae javascript mae matlab basically hum function banate thae aur Click event pae vo function likh dete thae see js wala code*/}
      {/* JS mae kese karte tahe see script.js wali file */}
      {/* tho same goes with this one yaha  */}

      {/* hum yaha kitne bhi functions call kar sakte hai */}
      {/* ye jo on mouse enter wala event hai n ye mouse hover karnae pae chalta hai*/}
      <button onClick={btnClicked}>change user</button>    
      {/* <button onClick={btnClicked()}>change user</button>    ager call kar diya tho click karne sae phele hi chal jayega per humey tho click kae baad chalana hai tho direct call nahi karenge */}

      {/* aur hum en functions ko reuse bhi kar sakte hai */}
      <button onClick={btnClicked}>explore this</button>

      {/* abb ye jo upper hum nae kiya function banaya fir uss ko yaha {} kae nader likha hum chayehe tho directly bhi function likh sakte thae */}
      
      {/* tho hum ye normal function bhi bana sakte hai aur arrow function bhi bana sakte hai */}
      
      {/* normal function */}
      <button onClick={function(){
        console.log('hello guys');
      }}>Click here</button>

      {/* arrow function */}
      <button onClick={() =>{
        console.log("menae arrow function wala button click kiya hai");
      }}>Click karo</button>


      {/* kuch naya bhi samajhte hai */}
      {/* <input onChange ={userType} type="text" placeholder='Enter Name'/> */}

      {/* Jab bhi hum event listner mae function chalate hai tho hum srf function ka name likhte hai {en braces kae ander}*/}
      {/* per ager hamera function kuch parameter recieve karna chata ho tho hum uss mae arguments kesae pass karenge kyoki ager hum functionName () ease ye circular brackets kae sath likh dae tho tho vo direct hi call ho jayega function */}
      {/* tho kese karenge argument pass  */}
      {/* we have 2 options */}
      
      {/* 1st yaha pae function bana lo */}
      {/* <input onChange={function(elem){
          console.log(elem.target.value)
      }} type="text" placeholder='Enter Name'/> */}

      {/* srf elem likhne pae details milenge sari */}
      {/* elem.target likhne pae konse element ko target kar rahe vo milega  */}
      {/* elem.target.value likhne pae jo hum type kar rahe vo dikhega */}

      {/* This is the concept of calling a function in react per yaha humney yaha function ko call kaha kiya yaha tgo humney khud hi function bana diya*/}

      <input onChange={function(elem){
         userType (elem.target.value) 
      }} type="text" placeholder='Enter Name'/>

      {/* abb ye dheako box pae hover karne pae ek event chalate hai*/}
      <div
        onMouseMove={(elem) =>{
          console.log(elem.clientY)
        }}
      className="box"
      >      
      </div>

      {/* abb ek aur samjho scrolling behaviour*/}
      <div onWheel={(elem) => {
        pageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

      

    </div>

    
  )
}

export default App