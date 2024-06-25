import './index.scss';

import React from 'react'

export default function AnimatedLetters({letterClass , strArray , index}) {
    return (
      
        <>
            <span>
                {
                    strArray.map((char, i) => (
                        <span key={char+i} className={`${letterClass} _${i+index}`}> 
                            {char}
                        </span>
                    ))
                }
            </span>
        </>
      
    
  )
}


