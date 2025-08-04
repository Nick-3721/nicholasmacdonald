import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/styles/ThemeProvider';
import WordFlip from '@/Components/WordFlip'
import ImagePlacer from '@/Components/ImagePlacer';
import ScramblingText from '@/Components/ScramblingText';

export default function Home() {
  const { theme } = useTheme();


  return (
    <>
      <ImagePlacer>
        <div className="wrapper">
          <div className="headline-container">

            <ScramblingText as="h1" text="Nicholas MacDonald" trigger="inView" />
            <ScramblingText as="h1" text="Developer & " trigger="inView" />
            <ScramblingText 
              as="h1"
              words={["Designer", "Videographer", "Animator", "3D Artist", "Creative", "Visual Artist", "Illustrator", "Motion Designer", "Photographer", "UI/UX Designer",]}
              interval={3000} 
              trigger="timer"
              cycle={true}
              startDelay={500}
            />
          </div>
        </div>
      </ImagePlacer>
        {/* <section>
          <p style={{color: theme.secondaryColor, fontFamily:"Sora, sans-serif", fontWeight: 400}}>Sora - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
          <p style={{color: theme.secondaryColor, fontFamily:"Krona one, sans-serif", fontWeight: 400}}>Krona one - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
          <p style={{color: theme.secondaryColor, fontFamily:"degular, sans-serif", fontWeight: 200}}>degular - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
        </section> */}
    </>
  )
}