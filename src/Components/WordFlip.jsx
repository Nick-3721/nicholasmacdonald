import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DURATION = 0.35;

const FlipLink = styled.a`
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: clamp(0.7rem, 0.4rem + 1.8vw, 1.2rem);
  color: ${({ theme }) => theme.secondaryColor};
`;

const FlipContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const FlipText = styled(motion.h1)`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  white-space: nowrap;
  opacity: 0;
  margin: 0;
  font-size: 80px;
`;

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

  const handleHover = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <motion.div initial="initial" whileHover="hovered" onHoverStart={handleHover}>
      <FlipLink target={newTab ? "_blank" : ""}>
        <FlipContainer height={dimensions.height} width={dimensions.width}>
          {words.map((word, i) => (
            <FlipText
              key={i}
              ref={el => textRefs.current[i] = el}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: i === index ? 0 : "-100%", opacity: i === index ? 1 : 0 }}
              transition={{ duration: DURATION, ease: "easeInOut" }}
            >
              {word}
            </FlipText>
          ))}
        </FlipContainer>
      </FlipLink>
    </motion.div>
  );
}
