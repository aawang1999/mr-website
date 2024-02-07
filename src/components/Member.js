import React from 'react'

const Member = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div>
        <img className='rounded-full p-8' src={item.image} alt="" />
      </div>
      <h3 className='text-2xl font-semibold mb-3'>{item.name}</h3>
      <p className='mb-3'>{item.title}</p>
    </div>
  )
}

export default Member