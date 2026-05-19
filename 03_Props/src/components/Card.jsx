import React from 'react'

const Card = (props) => {
    console.log()


  return (
    <div>
      <div className="card">
          <img src={props.img} alt="" />
          <h1>{props.user},{props.age}</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, molestiae!</p>
          <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
