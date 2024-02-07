import React, { useState, useEffect } from 'react'
import { teamNav, teamData } from '../data'
import Member from './Member'

const Team = () => {
  const [group, setGroup] = useState({ name: 'CS 194H' })
  const [members, setMembers] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const newMembers = teamData.filter((member) => {
      return member.group === group.name
    })
    setMembers(newMembers)
  }, [group])

  const handleClick = (e, index) => {
    setGroup({ name: e.target.textContent })
    setActive(index)
  }

  return (
    <section id='team' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-header text-3xl lg:text-4xl leading-snug mb-4 lg:mb-8">
            Meet the Team
          </h2>
          <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
              {teamNav.map((item, index) => {
                return <li onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active' : ''} cursor-pointer m-4`} key={index}>{item.name}</li>
              })}
            </ul>
          </nav>
        </div>
        <section className='grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
          {members.map((item) => {
            return <Member item={item} key={item.id} />
          })}
        </section>
      </div>
    </section>
  )
}

export default Team