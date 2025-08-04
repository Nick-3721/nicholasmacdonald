import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'

const duration = 10

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const Message = styled.div`
  position: absolute;
  width: ${(props) => props.messageHeight}px;
  height: ${(props) => props.messageHeight}px;
  top: 50%;
  left: 50%;
  animation: ${rotate} ${duration}s linear infinite;
  pointer-events: none;
`

const Character = styled.span`
  position: absolute;
  transform-origin: 0 ${(props) => props.messageHeight}px; 
  font-size: 8px;
  color: ${({ theme }) => theme.secondaryColor};
`


export default function WelcomeMessage( { height } ) {
  const messageHeight = height* 1.7
  const messageText = "Click to see work - ";
  const rotation = 360 / messageText.length;

  return (
    <Message className='WELCOME' messageHeight={messageHeight}>
      {messageText.split("").map((char, index) => (
          <Character
            key={index}
            style={{ transform: `rotate(${index * rotation}deg)` }}
            messageHeight={messageHeight}
          >
            {char}
          </Character>
      ))}
    </Message>
  );
}


// Working code but not quite right still