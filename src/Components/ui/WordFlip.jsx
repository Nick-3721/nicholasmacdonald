import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './WordFlip.module.css';

const DURATION = 0.35;

export default function RevealLink({ words, newTab }) {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const textRefs = useRef([]);

  useEffect(() => {
    if (textRefs.current.length > 0) {
      const maxWidth = Math.max(...textRefs.current.map(ref => ref?.scrollWidth || 0));
      const maxHeight = Math.max(...textRefs.current.map(ref => ref?.scrollHeight || 0));
      setDimensions({ width: maxWidth, height: maxHeight });
    }
  }, [words]);

  const handleChange = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <motion.div  style={{height: dimensions.height, display: "inline-flex"}} initial="initial" whileHover="hovered" onHoverStart={handleChange} onClick={handleChange}>
      <h1>&nbsp;</h1>
      <a className={styles.flipLink} target={newTab ? "_blank" : ""}>
        <div 
          className={styles.flipContainer}
          style={{ height: dimensions.height, width: dimensions.width }}
        >
          {words.map((word, i) => (
            <motion.h1
              key={i}
              ref={el => textRefs.current[i] = el}
              className={styles.flipText}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: i === index ? 0 : "-100%", opacity: i === index ? 1 : 0 }}
              transition={{ duration: DURATION, ease: "easeInOut" }}
            >
              {word}
            </motion.h1>
          ))}
        </div>
      </a>
    </motion.div>
  );
}
