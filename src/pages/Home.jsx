import React from 'react'
import { useTheme } from '../styles/ThemeProvider';
import WordFlip from '../Components/WordFlip'



export default function Home() {
  const { theme } = useTheme();
  return (
    <>
     <div style={{backgroundColor: theme.primaryColor, height: "100vh", paddingTop: "100px"}}>
                  
        <h1 style={{
          color: theme.secondaryColor, fontSize: "80px"
        }
        }>Nicholas MacDonald <br></br>
        Developer
        <WordFlip words={["& Designer", "& Videographer", "& Animator", "& 3D artist", "& Creative", "& Visual Artist", "& Motion Designer", "& Photographer",]} />
        </h1>
        <p style={{color: theme.secondaryColor, marginTop: "100px", fontFamily:"Sora, sans-serif", fontWeight: 400}}>Sora - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
        <p style={{color: theme.secondaryColor, marginTop: "100px", fontFamily:"Krona one, sans-serif", fontWeight: 400}}>Krona one - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
        <p style={{color: theme.secondaryColor, marginTop: "100px", fontFamily:"degular, sans-serif", fontWeight: 200}}>degular - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas magni quasi saepe non consequatur veritatis nemo soluta cumque obcaecati eaque omnis, neque atque unde officiis laboriosam fuga at repudiandae.</p>
      </div>

    </>
  )
}