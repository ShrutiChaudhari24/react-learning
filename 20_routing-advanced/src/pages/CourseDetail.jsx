import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()
    // console.log(params);
    console.log(params.id); // tho jo hum /mae denge vo aayega


  return (
    <div>
        {/* parems kae ander humey course id mil jayegi  */}
        {/* <h1>Course Details</h1> */}
        <h1> {params.id} Course Details</h1>
    </div>
  )
}

export default CourseDetail