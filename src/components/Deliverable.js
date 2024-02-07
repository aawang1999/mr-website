import React from 'react'
import { Link } from 'react-router-dom'

const Deliverable = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <a href={item.href}>
        <img className='rounded-full p-8' src={item.image} alt="" />
      </a>
      <h3 className='text-2xl font-semibold mb-3'>{item.number}</h3>
      <p className='mb-3'>{item.name}</p>
      {
        item.links.map((link) => {
          return (
            <a className='underline' href={link.href} download>{link.name}</a>
          )
        })
      }
    </div>
  )
}

export default Deliverable