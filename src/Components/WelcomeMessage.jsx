import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'

const duration = 10

const rotate = (messageHeight) => keyframes`
  0% {
    transform: rotate(0deg) translate(0, -${messageHeight / 2}px);
  }
  100% {
    transform: rotate(360deg) translate(0, -${messageHeight / 2}px);
  }
`;

const Message = styled.div`
    position: relative;
    width: ${(props) => props.messageHeight}px;
    height: ${(props) => props.messageHeight}px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* animation: ${rotate} ${duration}s linear infinite; */
    animation: ${(props) => rotate(props.messageHeight)} ${duration}s linear infinite;
`

const Character = styled.span`
  font-size:  ${(props) => props.messageHeight /2}px;
  height: 35px;
  position: absolute;
  width:  ${(props) => props.messageHeight /2}px;
  transform-origin: bottom;
  color: ${({ theme }) => theme.secondaryColor};
  /* border: solid 0.1px red; */
`


export default function WelcomeMessage( { height } ) {
  const messageHeight = height // *1.5 - to change calculation 
  const messageText = "Click to see work - ";
  const rotation = 360 / messageText.length;

  return (
      <Message className='WELCOME' messageHeight={messageHeight}>
        {messageText.split("").map((char, index) => (
          <Character
            key={index}
            style={{ transform: `rotate(${index * rotation}deg) translate(0px, -${messageHeight/2}px)` }}
            messageHeight={messageHeight}
          >
              {char}
            </Character>
        ))}
      </Message>
  );
}
