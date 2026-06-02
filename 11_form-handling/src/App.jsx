import React from 'react'

const App = () => {

  // ess ko ease na likhte huye
  // const submitHandler = () =>{
  //   console.log('form Submitted');
  // }

  // ease likho
  const submitHandler = (e) =>{
    e.preventDefault(); // jab hum ye likhte hai tho hum hamere form kae default behaviour ko prevent kar lete hai
    console.log('Form Submitted');
  }

  return (
    <div>
      {/* jese onClick ek event hota tha wese hi onSubmit bhi ek event hai */}
      {/* <form onSubmit={submitHandler}>  */}

      {/* if we want to prevent the default behaviour of form matlab submit karne pae reload na ho  */}
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App