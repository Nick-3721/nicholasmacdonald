import React, { useEffect, useRef, useState } from 'react'
import WordFlip from '@/Components/ui/WordFlip'
import ImagePlacer from '@/Components/views/home/ImagePlacer';
import ScramblingText from '@/Components/ui/ScramblingText';
import styles from './Home.module.css';

export default function Home() {

  const [mode, setMode] = useState('click'); // 'click' or 'draw'
  const messaging = mode === 'click' ? "Click mode active - Click to see work" : "Draw mode active - Draw to see work";

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'm' || event.key === 'M') {
        setMode((prevMode) => (prevMode === 'click' ? 'draw' : 'click'));
      }   
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []); // Empty dependency array since setMode is stable

  return (
    <>
      <ImagePlacer mode={mode} setMode={setMode}>
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
              <ScramblingText as="p" text={messaging} trigger="inView" />
              <ScramblingText as="p" text="Push [M] key to change mode" trigger="inView" />
            {/* <span className='together'>
              <ScramblingText as="p" text="Mode:" trigger="inView" />
              <ScramblingText as="p" text={mode.charAt(0).toUpperCase() + mode.slice(1)} trigger="inView" />
            </span> */}
          </div>
        </div>
      </ImagePlacer>
    </>
  )
}