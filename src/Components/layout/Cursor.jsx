import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import WelcomeMessage from '@/Components/layout/WelcomeMessage';
import styles from './Cursor.module.css';
import { useLocation } from 'react-router-dom';


const cursorSize = {
  h: 16,
  w: 16,
};

export default function Cursor() {
  const location = useLocation();
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
      backgroundColor: `rgb(var(--secondary-color))`,
    },
    hovered: {
      scale: 5,
      backgroundColor: `rgb(var(--tertiary-color))`,
    },
    title: {
      scale: 15,
      backgroundColor: `rgb(var(--secondary-color))`,
      mixBlendMode: 'difference',
    },
  };

  const [showMessage, setShowMessage] = useState(true);

  return (
    <motion.div
      className={styles.cursor}
      style={{ x: cursorX, y: cursorY }}
      variants={variants}
      animate={cursorVariant}
    >
      {/* {showMessage &&  */}
      {/* {location.pathname === '/' && 
        <WelcomeMessage
          height={cursorSize.h}
        />
      } */}
    </motion.div>
  );
}
