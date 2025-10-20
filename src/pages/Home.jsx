import React, { useEffect, useRef, useState } from 'react'
import WordFlip from '@/Components/ui/WordFlip'
import ImagePlacer from '@/Components/pages/home/ImagePlacer';
import ScramblingText from '@/Components/ui/ScramblingText';
import styles from './Home.module.css';

export default function Home() {


  return (
    <>
      <ImagePlacer>
        <div className="wrapper">
          <div className="headline-container">

            <ScramblingText as="h1" text="Nicholas MacDonald" trigger="inView" />
            <ScramblingText as="h1" text="Developer & " trigger="inView" />
            {/* <span style={{ display: "block" }}> */}

            <ScramblingText 
              as="h1"
              words={["Designer", "Videographer", "Animator", "3D Artist", "Creative", "Visual Artist", "Illustrator", "Motion Designer", "Photographer", "UI/UX Designer",]}
              interval={3000} 
              trigger="timer"
              cycle={true}
              startDelay={500}
              />
            {/* </span> */}
          </div>
        </div>
      </ImagePlacer>
    </>
  )
}