import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  // tho store aur map kese karwayenge
  const [task, setTask] = useState([]) // task name ka hamere pass ek pura ka pura array hai jis kae ander hum title aur details jese chije rakhne wale hai

// UI humney baan liya abb 2 way binding karna hai tho uss sae phele form handling kar lete hai
  const submitHandler = (e)=>{
    e.preventDefault();

    // abb humey srf console pae hi thodi n print karwana hai humey tho ess ko store bhi karwan hai aur map bhi karwana hai 
    // console.log(title);
    // console.log(details);

    const copyTask = [...task];

    copyTask.push({title,details});

    setTask(copyTask);

    

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];

    copyTask.splice(idx,1); // kaha sae karna hai aur kaha tak karna hai delete
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form onSubmit={(e)=>{
        submitHandler(e)  // form ka default behaviour hai ki jese hi submit hota hai wese hi UI reload ho jata hai tho uss kae liye submit handler ko function kae ander call karenge aur value denge aur submitHandler function kae ander preventDefault karenge
        }} className='flex gap-4 lg:w-1/2 p-10  flex-col items-start '>
          
          <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* phela input for heading*/}
          <input 
          type='text' 
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          
          />

        {/* Detailed wala input */}
          <textarea
          type='text'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded '
          placeholder='Write Details here'
          value={details} 
          onChange={(e) =>{
            setDetails(e.target.value);
          }}
          />

          <button className='bg-white active:scale-95 w-full font-medium outline-none text-black px-5 py-2 rounded'>Add Note</button>

      </form>
      {/* ess form kae alawa hamere pass ek div aur rahega jis mae hamera data rahega ki kya kya cihje hum rakhne wale hai*/}
      <div className='lg:w-1/2 lg:border-l-2 p-10'>  
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
           {task.map(function(elem, idx){

           return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App