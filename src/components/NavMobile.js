import React, { useState } from 'react'
import { navigation } from '../data'
import { XIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }
  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  }

  return (
    <nav className='relative'>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-black">
        <MenuAlt3Icon className='w-8 h-8 text-white' />
      </div>
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      >
      </motion.div>
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
          <XIcon className='w-8 h-8 text-white' />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8 text-white'>
              <Link to={item.href} smooth={true} duration={500} offset={-70} className='cursor-pointer' onClick={() => setIsOpen(false)}>{item.name}</Link>
            </li>
          )
        })}
        {/*
          <Link to='#' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>
            <button className='btn btn-md text-white border-2 border-white py-4 px-7 rounded-sm hover:bg-accent-hover transition-all'>
              Demo
            </button>
          </Link>
        */}
      </motion.ul>
    </nav >
  )
}

export default NavMobile