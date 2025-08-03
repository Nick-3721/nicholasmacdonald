import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'


const size = 50
const duration = 10

const rotate = keyframes`
  0%{
      transform: rotate(0deg);
    }
   100%{
      transform: rotate(360deg);
    }
`

const Circle = styled.div`
  position: relative;
  width: ${size}px;
  height: ${size}px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${rotate} ${duration}s linear infinite;

`

const Character = styled.span`
  position: absolute;
  left: 50%; 
  transform-origin: 0 ${size / 2}px; 
  font-size: 8px;
  color: ${({ theme }) => theme.secondaryColor};
`


export default function WelcomeMessage() {
  const [hasntBeenClicked, setHasntBeenClicked] = useState(true);

  // ============ SORT THE BELOW BETTER


  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPos({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);


  window.addEventListener('click', () => {
    setHasntBeenClicked(false);
    console.log(`hasntBeenClicked is ${hasntBeenClicked}`)
});

  console.log(`hasntBeenClicked is ${hasntBeenClicked}`)

  let messageText = "Click to see work - "
  let rotation = 360 / messageText.length
  
  return (
<>
    {hasntBeenClicked && <Circle>
      <Message>
        {messageText.split("").map((char, index) => {
          return (
            <Character
              style={{
                transform: `rotate(${index * rotation}deg)`,

              }}
            >
              {char}
            </Character>
          );
        })}
      </Message>
    </Circle>}
</>
  );
}
