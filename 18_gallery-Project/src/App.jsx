import React, { useEffect, useState } from 'react'
import Card from "./components/Card";
import axios from 'axios'

const App = () => {

  // abb response.data sae data mil gaya tho user data pae initially value dae di khali array
  const [userdata, setUserData] = useState([]);

    // hum chate hai ki jab hum prev pae click kare tho piche aajaye aur jab next pae cilck kare tho aage chale jaye hum
    const [index, setIndex] = useState(1)

   const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);

    // console.log(response.data); user data ko console pae tho nahi leke aana 
    // tho set kardo user data ko 
    setUserData(response.data);
  }

  // humey getData pae click karne pae data nahi chiye humey chiye ki data apne aap aajaye so will use useEffect, useEffect kya karta hai chijo ko side stack mae chalene ka kam karta hai we already know about that
  // bina button click kae data aajayega
  useEffect(function () {
    getData()
  },[index])


  let printUserData = <h3 className='text-grey-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  // ager user data ki length 0 sae jyada hai jo ki hai 15 hai hamere case mae tho printUserData mae jake user data ko kardena map aur return kardena hello
  if(userdata.length > 0){
    printUserData = userdata.map(function(elem,idx){


      // return 'hello'
      // return idx; // ye karne pae 0 to 14 index dikhenge

      // lekin humey tho images ka data return karna hai tho
      return <div key={idx}>
        <Card elem ={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>

    

      {/* abb hum chate hai ki jese hi hum getData pae click kare wese hi data na aaye apne aap aa jaye tho ess ko kardiya comment aur hum use karenge useEffect ka  */}
      {/* <button onClick={getData}
      className='bg-green-600 mb-3 active:scale-95 px-5 py-2 rounded text-white'>Get data</button> */}

      {/* abb lets say humney ek div banaya hum yaha data ko map karna chate hai tho kese karenge */}

      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

        {/* this is like pagenation */}
        <div className='flex justify-center items-center p-4 gap-6'>
          <button
          style={{opacity: index == 1 ? 0.6 : 1}} // ager previous ki value 1 sae kam hogi tho
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py2 font-semibold'
          onClick={()=>{
              // console.log('next button clicked')
              if(index > 1){
                setIndex(index-1)
                setUserData([])
              }  
          }}
          >
            Prev</button>

            <h4>Page{index}</h4>

          <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py2 font-semibold'
          onClick={()=>{
            // console.log('next button clicked')
            setIndex(index+1)
            setUserData([])
          }}
          >
            Next</button>
        </div>


    </div>
  )
}

export default App


// notes :=
/* 
axios.get('yaha jo url hoga waha sae hum data fecth kar rahe honge') :- backend sae data fetch karne kae liye

axios.post('url jaha hum data send karna chate hai',{user:'Shruti', password: 'shrutipassword'}, aur bhi ager kuch bhajna hai tho bhaj sakte hai) // jo data hum bhajna chate hai backend pae

axios.patch() // data ko update karne ka kam karta hai ager humey jese kisi website pae hameri profile update karni hai password change karna hai

axios.delete() // data ko delete karne kae liye, jese humey koi website sae hamera account delete  karna hai tho delete ki request chalayenge
*/