import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '@/styles/ThemeProvider';

const StyledCursor = styled.div`
   background-color: ${({ theme }) => theme.secondaryColor};
   height: 32px;
   width: 32px;
   border-radius: 50%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 9999;
`;

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition)

  useEffect(() => {
    const mouseMove = e => {
      // console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  },[])

  return (
    <StyledCursor />
  )
}
