import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/styles/ThemeProvider';
import WordFlip from '@/Components/WordFlip'
import ImagePlacer from '../Components/ImagePlacer';

export default function Home() {
  const { theme } = useTheme();
  const textRef = useRef([]);

  const [titleHeight, setTitleHeight] = useState(0)

  useEffect(() => {
    if(textRef.current) {
      setTitleHeight(textRef.current.scrollHeight)
    }
  }), [];

  return (
    <>
    <ImagePlacer>
      <div className="wrapper">
        <div className="headline-container">
          <h1>Nicholas MacDonald</h1>
          <div className="grid" style={{height: titleHeight*2}}>
            <h1 ref={textRef}>Developer</h1>
            <WordFlip words={["Designer", "Videographer", "Animator", "3D artist", "Creative", "Visual Artist", "Illustrator", "Motion Designer", "Photographer", "UI/UX Designer",]} />
          </div>
        </div>
      </div>
    </ImagePlacer>
      <section>
        <p style={{color: theme.secondaryColor, fontFamily:"Sora, sans-serif", fontWeight: 400}}>Sora - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
        <p style={{color: theme.secondaryColor, fontFamily:"Krona one, sans-serif", fontWeight: 400}}>Krona one - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
        <p style={{color: theme.secondaryColor, fontFamily:"degular, sans-serif", fontWeight: 200}}>degular - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
      </section>

    </>
  )
}