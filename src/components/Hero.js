import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id='home' className='section bg-primary'>
      <div className="container mx-auto lg:mt-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-header mt-[50px] lg:mt-[0px] leading-snug">
            Where music and memories meet.
          </h2>
          <Link to='deliverables' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>
            <button className="btn btn-md bg-accent mt-8 lg:mt-16 hover:bg-accent-hover transition-all">
              View Our Project
            </button>
          </Link>
          <p className="text-paragraph mt-8 lg:mt-16 max-w-[800px] leading-relaxed">
            Join a community where music and memories come as one. Without any extra effort, users incrementally build an archive of their favorite music with all of the past emotions, activities, and memories associated with it.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero