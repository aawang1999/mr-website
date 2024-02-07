import React, { useState, useEffect } from 'react'
import { deliverablesNav, deliverablesData } from '../data'
import Deliverable from './Deliverable'

const Deliverables = () => {
  const [group, setGroup] = useState({ name: 'CS 194H' })
  const [items, setItems] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const newItems = deliverablesData.filter((item) => {
      return item.group === group.name
    })
    setItems(newItems)
  }, [group])

  const handleClick = (e, index) => {
    setGroup({ name: e.target.textContent })
    setActive(index)
  }

  return (
    <section id='deliverables' className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-header text-3xl lg:text-4xl leading-snug mb-4 lg:mb-8">
            Deliverables
          </h2>
          <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
              {deliverablesNav.map((item, index) => {
                return <li onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active' : ''} cursor-pointer m-4`} key={index}>{item.name}</li>
              })}
            </ul>
          </nav>
        </div>
        <section className='grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
          {items.map((item) => {
            return <Deliverable item={item} key={item.id} />
          })}
        </section>
      </div>
    </section>
  )
}

export default Deliverables