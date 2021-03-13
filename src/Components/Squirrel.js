import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <h4>{props.data.unique_squirrel_id}</h4>
      <p>Age? {props.data.age}</p>
      <p>Is it running? {props.data.running ? "Yes🏃" : "No"}</p>
      <p>Is it eating? {props.data.eating ? "🍟 " : "No"}</p>
    </div>
  );
}

export default Squirrel;
