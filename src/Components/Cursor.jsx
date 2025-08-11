import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../styles/ThemeProvider';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import WelcomeMessage from '@/Components/WelcomeMessage';


const cursorSize = {
  h: 16,
  w: 16,
};

const StyledCursor = styled(motion.div)`
  height: ${cursorSize.h}px;
  width: ${cursorSize.w}px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9;
`;

export default function Cursor() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorVariant, setCursorVariant] = useState('default');

  const springConfig = {
    damping: 100,
    stiffness: 1000,
    mass: 1,
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - cursorSize.w / 2);
      mouseY.set(e.clientY - cursorSize.h / 2);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
    
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        setShowMessage(false)
        // ==========  MAYBE REMOVE THIS LOOKS A BIT MUCH
        if (type === 'hover') {
          setCursorVariant('hovered');
        } else if (type === 'title') {
          setCursorVariant('title');
        }
      }
    };
    
    const handleMouseLeave = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
    
      const cursorTarget = target.closest('[data-cursor]');
      const relatedTarget = e.relatedTarget;
    
      if (cursorTarget && !(relatedTarget instanceof Element && relatedTarget.closest('[data-cursor]'))) {
        setCursorVariant('default');
        setShowMessage(true)
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: theme.secondaryColor,
    },
    hovered: {
      scale: 5,
      backgroundColor: theme.tertiaryColor,
    },
    title: {
      scale: 15,
      backgroundColor: theme.secondaryColor,
      mixBlendMode: 'difference',
    },
  };

  const [showMessage, setShowMessage] = useState(true);

  return (
    <StyledCursor
      style={{ x: cursorX, y: cursorY }}
      variants={variants}
      animate={cursorVariant}
    >
      {showMessage && 
        <WelcomeMessage
          height={cursorSize.h}
        />
      }
    </StyledCursor>
  );
}
