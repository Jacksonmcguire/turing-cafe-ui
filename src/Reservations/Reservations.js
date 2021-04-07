import React from 'react';
import './Reservations.css'

export const Reservations = ({resys, cancelRes}) => {

  const handleChange = (id) => {
    cancelRes(id)
  }

  const resCards = resys.map(resy => {
    return <article>
      <h2>{resy.name}</h2>
      <p>{resy.date}</p>
      <p>{resy.time}</p>
      <p>Number of guests: {resy.number}</p>
      <button onClick={() => handleChange(resy.id)}>Cancel</button> 
    </article>
  }
    )
  return <section className="reservations">{resCards}</section>
}