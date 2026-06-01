import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  // how to work with objects
  const [user, setUser] = useState({userName:"ABC", age:20});

  // how to work with arrays
  const [arr, setArr] = useState([10,20,30]);

  const btnClicked = () => { 
    setNum(20); // abb ye tho humney already padh liya hai ki button pae click karenge value change ho jayegi

    // setNum(num); react rerender nahi karega

    // abb ye dheako ager hum console log karenge num ki value ko tho kya hoga although button pae click ho chuka hai aur value change ho chuki hai per console pae abhi bhi num ki purani value aayegi
    // console.log(num);
    // console.log(user);
    
    // abb easa kyu? -> kyoki ye jo setNum function hai ye asynchronously chalta hai.
    // 2 tarike sae hamera JS kam karta hai 1st is synchronous matlab chije line wise, orderwise chal rahi hai, chije sync mae chal rahi hai matlab phele ek process chali fir dusri process chali ease 
    // yaha chije chal rahi hai asynchronously matlab koi phele chal raha hai koi baad mae chal raha hai ye kafi alag tarike sae kam karta hai
    // tho jab hum setNum chlayenge tho hoga kya yaha setNum chalega ye asynchronous process hai aur hum yaha uss kae just baad console log karenge tho vo phele dikh jayega although UI pae humey new value dikhegi lekin console pae bhot fast hota hai tho ussey itni jaldi samajh nahi aat ki new value aayi hai


    // ager objects kae liye kar rahe hai tho
    // hum yaha objects ko kese upadate kar sakte hai
    // tho yaha 2 solutions hote hai 1) destructuring
    const newuser = {...user}; // copy banai refer kiya // button click hone pae newuser name ki ek chij banai aur uss ko reference dae diya user object ka 
    newuser.userName = 'pqr'; // aur fir newUser mae jo userName tho uss ko change kar diya
    newuser.age = 22;
    
    // ager array kae sath kar rahe hai tho
    const newArr = [...arr];
    newArr.push(99) 

    setUser(newuser); // aur set kar diya newUser object ko

    setArr(newArr); // arr


    // second technique
    setUser(prev=>({...prev,age:21}))


    // what is batch update
    // setNum(num+1);
    // setNum(num+1);
    // setNum(num+1);
    // ager easae likhte hai tho value 1 sae hi badhegi itne quickly ye kam ho raha hai ki ye num ki value ko update hi nahi kar pa raha
    // easae hi batch update bolte hai 
    // ager hum easae acche sae karna chate hai tho kese karenge
    // setNum(prev=> (prev+1));
    // setNum(prev=> (prev+1));
    // setNum(prev=> (prev+1));
    // ess mae jo desired output hai vo hi milega
    // tho ess ko bolte hai batch update

  }

  return (
    <div>
      <h1>{num} <br />{user.userName}, {user.age} <br /> {arr}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App