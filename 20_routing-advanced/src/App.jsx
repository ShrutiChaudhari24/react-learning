import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/about';
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Navbar2 from './components/Navbar2';

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/product' element={<Product/>}/> */}

            {/* this (*) is the symbol for unknown route ager hum kisi unknown route pae gaye tho hum chale jayenge NotFound wale page pae */}
            <Route path ='*' element={<NotFound/>}/>  

            {/* nested routes banane ka ek ye tarika hai per ye sahi tarika nahi hai*/}
            {/* <Route path='/product/product1' element={<Product1/>}/>
            <Route path='/product/product2' element={<Product2/>}/> */}

            {/* dynamic routing -> humney Courses name ka ek page banaya hai aur humney CourseDetails name ka bhi ek page banaya hai hum chate hai ki jab bhi hum /courses/kuch bhi .. ager hit kare tho hum CourseDetails wale page per chale jaye matlab hum basically CourseDetail name kae page ko hamera dynamic Route bana rahe hai*/}
              <Route path='/courses' element = {<Courses/>}/>

            {/* tho Dynamic Route kese banate hai ease */}
              <Route path='/courses/:id' element={<CourseDetail/>}/>
              {/* yaha (:) lagana jaruri hai baki likh tho kuch bhi sakte hai Courseid likh doo ya kuch bhi likh doo */}

            {/* humey product kae ander nested routes banane hai, tho sahi tarika kese hoga */}
            {/* jo <Route path='/product' element={<Product/>}/> ye hai abhi self closing pae rakha huya hai tho ess ko self closing ki jaghe close kardo */}
            <Route path='/product' element={<Product/>}>
                <Route path='product1' element={<Product1/>}/>
                <Route path='product2' element={<Product2/>}/>
                <Route path='product3' element={<Product3/>}/>
            </Route>
            {/* aur ye kam tab karega jab hum product kae ander jake likhenge outlet */}

          </Routes>
      <Footer/>
    </div>
  )
}

export default App