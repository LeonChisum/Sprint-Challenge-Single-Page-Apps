import React from "react";

export default function CharacterCard({character}) {
  const { name, image, species, location, origin} = character;
  return (
    <div className="ui bottom attached segment active tab">
      <div>
        <img src={image}></img>
        <h2> { name } </h2>
        <p>{ species }</p>
        
        <div>
          <h4>Location: { location.name }</h4>
          <h4>Origin: { origin.name }</h4>
        </div>
        
      </div>
    </div>
  );
}
