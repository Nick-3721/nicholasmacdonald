import React from 'react'
import styled from 'styled-components';

const ThemeButton = styled.button`
    cursor: pointer;
    background-color: unset;
    color: white;
    height: 35px;
    width: 125px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    border-radius: 20px;
    border: .5px solid white;
    overflow: hidden;
    position: relative;
    overflow: hidden;
    padding: 0;
    p {
      position: absolute;
      right: 23px;
      /* left: 10%;
      right: 10%; */
      /* padding-left: 10px; */
      width: fit-content;
      margin: auto;
      transition: color 0.2s ease-out 0.1s,
                  transform 0.2s ease-out 0.1s;
    }
    .button-ball {
      position: absolute;
      height: 5px;
      width: 5px;
      background-color: red;
      border-radius: 50%;
      left: 22px;
      transition: height 0.2s ease-out 0.1s,
                  width 0.2s ease-out 0.1s, 
                  border-radius 0.4s ease-in-out 0.3s,
                  left 0.2s ease-out 0.1s;
    }
    &:hover .button-ball {
        height: 160px;
        width: 160px;
        /* border-radius: 10%; */
        /* transition: tra */
        left: 0px;
        /* transform: translateX(-35px); */
    }
    &:hover p {
      color: black;
      transform: translateX(-10px)

    }
`;

const changeTheme = () => {
  console.log("toggled")
}

export default function ThemeToggle() {
  return (
    <ThemeButton onClick={changeTheme}>
      <div className="button-ball"></div>
      <p>Switch it up</p>
    </ThemeButton>
  )
}
