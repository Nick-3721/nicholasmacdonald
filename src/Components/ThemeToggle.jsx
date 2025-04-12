import React from 'react'
import styled from 'styled-components';
import { useTheme } from '@/styles/ThemeProvider';

let height = 35
let width = 114



const ThemeButton = styled.button`
    cursor: pointer;
    /* background-color: unset; */
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
    height: ${height}px;
    width: ${width}px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    border-radius: 20px;
    border: none;
    overflow: hidden;
    position: relative;

    p {
      font-family: "degular", sans-serif;
      font-size: 14px;
      font-weight: 400;
      position: absolute;
      right: 16px;
      width: fit-content;
      margin: auto;
      transition: color 0.2s ease-out,
                  transform 0.2s ease-out 0.1s;
    }

    &:hover p {
      color: ${({ theme }) => theme.primaryColor};
      transform: translateX(-13px);
      /* transform: translateX(-10px); */
    }

    .button-arrow-container {
      display: inline-block;
      right: -20px;
      width: 16px;
      height: 16px;
      overflow: hidden;
      position: absolute;
      transition: transform 0.5s ease 0s;
      /* border: 1px solid green; */
    }

    .button-arrow {
      font-size: 18px;
      line-height: 1rem;
      position: absolute;
      right: 6px;
      /* transition: color 0.2s ease-out 0.1s; */
      color: ${({ theme }) => theme.primaryColor};
      margin-top: -1px;
      z-index: 1;
    }

    &:hover .button-arrow-container {
      /* transform: translateX(-30px); */
      transform: translateX(-28px);
    }
`;

const Border = styled.div`
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    width: ${width-2}px;
    height: ${height-2}px;
    position: absolute;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    z-index: 2;
    border-radius: inherit;
`;

const ButtonBall = styled.div`
    will-change: transform;
    position: absolute;
    height: 5px;
    width: 5px;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 50%;
    left: 17px;
    transition: height 0.3s ease 0.1s,
                width 0.3s ease 0.1s, 
                border-radius 0.4s ease-in-out 0.3s,
                left 0.2s ease-out 0.1s;

    ${ThemeButton}:hover & {
      height: 160px;
      width: 160px;
      left: 0px;
    }
`;



export default function ThemeToggle() {

  const { changeTheme } = useTheme(); // Access toggleTheme from the context


  return (
      <ThemeButton onClick={changeTheme}>
        <Border />
        <ButtonBall />
        <p>Switch it up</p>
        <div className="button-arrow-container">
          <div className="button-arrow">→</div>
        </div>
      </ThemeButton>
  )
}
