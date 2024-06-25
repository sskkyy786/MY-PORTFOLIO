import React from 'react'
import './index.scss'
import Layout from '../Layout'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const headArr = ['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E'];
    const footArr = [' ','c','r','e','a','t','e',' ','s','o','m','e','t','h','i','n','g',' ','a','m','a','z','i','n','g',' ','t','o','g','e','t','h','e','r','!']
 
  useEffect(() => {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  })
  return (
      <div>
          <Layout/>
          <div className='about'>
              <h1><AnimatedLetters letterClass={letterClass} strArray={headArr} index={1}/></h1>
              <h4>I'm a passionate frontend web developer with a keen interest in data analysis, always on the lookout for opportunities to expand my skill set.</h4>
              <h4>I thrive on learning and exploring new realms, whether they're tech-related or not.</h4>
              <h4>In a nutshell, I'm a nature photography lover, sketching fanatic, poetry enthusiast, and an all-around tech aficionado. </h4>
              <h2>
                    <span className={`${letterClass} _${1}`}>L</span>
                    <span className={`${letterClass} _${2}`}>e</span>
                    <span className={`${letterClass} _${3}`}>t'</span>
                    <span className={`${letterClass} _${4}`}>s </span>
                  <AnimatedLetters letterClass={letterClass} strArray={footArr} index={0} />
              </h2>
        </div>
    </div>
  )
}
