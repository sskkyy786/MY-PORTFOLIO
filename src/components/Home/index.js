

import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import '../Home/index.scss'
import AnimatedLetters from '../AnimatedLetters';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArr = [' ' , 'f', 'a', 'l', 'a', 'k']
  const branchArr = ['C', 'h', 'e', 'm', 'i', 'c', 'a', 'l', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g']
  const collegeArr = ['I', 'I', 'T', ' ', 'B', 'o', 'm', 'b', 'a', 'y']
  
  useEffect(() => {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  })
  return (
      <>
          <div><Layout/></div>
          <div className='parent-div'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _${12}`}>i,</span>
          <br />
          <span className={`${letterClass} _${13}`}>T</span>
          <span className={`${letterClass} _${14}`}>h</span>
          <span className={`${letterClass} _${15}`}>i</span>
          <span className={`${letterClass} _${16}`}>s </span>
          <span className={`${letterClass} _${17}`}>  </span>
          <span className={`${letterClass} _${18}`}>i</span>
          <span className={`${letterClass} _${19}`}>s</span>
           
          <AnimatedLetters letterClass={letterClass} strArray={nameArr} index={20}/>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={branchArr} index={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={collegeArr} index={10} />
          <span className={`${letterClass} _${75}`}>'2</span>
          <span className={`${letterClass} _${76}`}>5</span>
              </h1>
              <h2>Web Developer / Content Creator / Data Analyst</h2>
          </div> 
    </>
  )
}
