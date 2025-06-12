import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const randomChars = Array.from("!@£$%^&*()_+[];',./{}:\"<>?\\|1234567890-=¡€#¢∞§¶•ªº–≠");

const ScrambledLetter = memo(({ targetChar, phase, delay, as: Tag = 'span' }) => {
  const [displayChar, setDisplayChar] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const MotionTag = motion(Tag);

  useEffect(() => {
    let timeout;
    let interval;

    // animate in
    if (phase === 'in') {
      timeout = setTimeout(() => {
        let count = 0;
        interval = setInterval(() => {
          if (count < 3) {
            setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)]);
            count++;
          } else {
            clearInterval(interval);
            setDisplayChar(targetChar);
            setIsVisible(true);
          }
        }, 100);
      }, delay);
    }

    // Animate out
    if (phase === 'out') {
      timeout = setTimeout(() => {
        let count = 0;
        interval = setInterval(() => {
          if (count < 3) {
            setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)]);
            count++;
          } else {
            clearInterval(interval);
            setDisplayChar('');
            setIsVisible(false);
          }
        }, 100);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [targetChar, phase, delay]);

  return (
    <MotionTag
      animate={{ opacity: isVisible ? 1 : 0.6 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'inline-block', pointerEvents: 'none' }}
    >
      {displayChar}
    </MotionTag>
  );
});

const CyclingScrambledText = ({ words = [], className = '', interval = 3000, as: Tag = 'span', animate = false }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState('in');
  const [hasAnimatedInitially, setHasAnimatedInitially] = useState(false);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    if (animate && !hasAnimatedInitially) {
      setHasAnimatedInitially(true);
      setPhase('in'); // trigger initial animation
    }
  }, [animate, hasAnimatedInitially]);

  useEffect(() => {
    if (words.length <= 1) return;

    const totalDuration = interval;

    const animateCycle = setInterval(() => {
      setPhase('out');
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setPhase('in');
      }, 500); // time for "out" animation
    }, totalDuration);

    return () => clearInterval(animateCycle);
  }, [words, interval, currentWordIndex]);

  return (
    <div
      className={className}
      data-cursor="title"
      style={{
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        height: "100px" // hacky - fix later
      }}
    >
      {currentWord.split('').map((char, index) => {
        const delay = phase === 'out'
          ? (currentWord.length - 1 - index) * 80 // last letter first
          : index * 80; // first letter first
        return (
          <ScrambledLetter
            key={`${currentWord}-${index}`}
            targetChar={char}
            phase={hasAnimatedInitially ? phase : 'in'} // ensure initial render animates
            delay={delay}
            as={Tag}
          />
        );
      })}
    </div>
  );
};

export default memo(CyclingScrambledText);