import React from "react";

const Card = (props) => {

  return (
    <div
      className="card"
      style={{ backgroundColor: props.color }}
    >

      <div>
        <h1>{props.title}</h1>

        <p>{props.date}</p>
      </div>

      <div className="card-footer">

        <img
          src={props.img}
          alt="user"
          className="small-avatar"
        />

        <div className="team-count">
          {props.members}
        </div>

      </div>
    </div>
  );
};

export default Card;