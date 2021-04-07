import React from 'react';
import './Reservations.css'

export const Reservations = ({resys}) => {
  const resCards = resys.map(resy => {
    console.log(resy)
    return <article>
      <h2>{resy.name}</h2>
      <p>{resy.date}</p>
      <p>{resy.time}</p>
      <p>Number of guests: {resy.number}</p>
      <button>Cancel</button> 
    </article>
  }
    )
  return <section className="reservations">{resCards}</section>
}