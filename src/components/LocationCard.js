import React from "react";

export default function LocationCard({location}) {
  const { name, type, dimension, residents } = location;

  return (
    <div>
      <h2>{ name }</h2>
      <h4> { type } - {dimension}</h4>
    
      <div>
        <p>{residents.length} residents</p>
      </div>
    </div>
  )
}
