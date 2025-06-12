import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/styles/ThemeProvider';
import WordFlip from '@/Components/WordFlip'
import ImagePlacer from '@/Components/ImagePlacer';
import ScrambleText from '@/Components/ScrambleText';
import CyclingScrambledText from '@/Components/CyclingScrambledText';

export default function Home() {
  const { theme } = useTheme();
  // const textRef = useRef([]);

  // const [titleHeight, setTitleHeight] = useState(0)

  // useEffect(() => {
  //   if(textRef.current) {
  //     setTitleHeight(textRef.current.scrollHeight)
  //   }
  // }), [];

  return (
    <>
    <ImagePlacer>
      <div className="wrapper">
        <div className="headline-container">
          <ScrambleText as="h1" text="Nicholas MacDonald"/>
          <ScrambleText as="h1" text="Developer &" />
          <CyclingScrambledText
            as="h1"
            words={["Designer", "Videographer", "Animator", "3D artist", "Creative", "Visual Artist", "Illustrator", "Motion Designer", "Photographer", "UI/UX Designer",]}
            interval={4000} // how long each word is displayed
            className="text-3xl font-bold"
          />
        {/* <WordFlip words={["Designer", "Videographer", "Animator", "3D artist", "Creative", "Visual Artist", "Illustrator", "Motion Designer", "Photographer", "UI/UX Designer",]} /> */}
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