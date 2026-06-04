import React from 'react'

const App = () => {

  // localStorage.clear(); // ess clear() method sae hamera local storage ka data clear ho jayega
  // sessionStorage.clear(); // ess sae session storage clear ho jayega

  // ager local storage mae data save karna hai, tho local storage mae hum data save karte hai in the form of key value pair
  // localStorage.setItem('user','Shruti') // abb ager humey ye command hata bhi di tho bhi data save rahega , ager brower band bhi kar diay aur fir sae suru karoge tho bhi data wesa hi dikhega
  localStorage.setItem('age','20');

  // ager get karna hai local storage ka data tho konsi key ka data chiye vo get karlo
  const user = localStorage.getItem('user');
  console.log(user);
  
  const age = localStorage.getItem('age');
  console.log(age);

  localStorage.removeItem('user');

  // 4 tho method hai 
  // setItem() -> set karne kae liye 
  // getItem() -> get karne kae liye
  // removeItem() -> remove karne kae liye
  // clear() -> pura clear karne kae liye


  // abb ager array ya object ko save karna hai ya retrive karna hai tho kese karenge
  const user1 = {
    username: 'Chotu',
    age: '100',
    city: 'cityyyyy'
  }

  console.log(user1);

  // abb ager user1 object ko local Storage pae save karna hai tho kese karte thae
  // localStorage.setItem('user1',user1) // ye local storge mae ease store ho raha hai [object Object] kyo?? kyoki jo setItem mae hum key value pair mae data pass karte hai tho dono string form mae hone chiye yaha humney value ko object form mae hai tho kya karenge? -> ek method hoti hai JSON.stringify name ki uss sae hum string mae convert kar lete hai
  localStorage.setItem('user1',JSON.stringify(user1))
  const storedUser1 = JSON.parse(localStorage.getItem('user1')); // ager fir sae Object mae convert karna hai tho
  console.log(typeof (storedUser1));


  return (
    <div>App</div>
  )
}

export default App