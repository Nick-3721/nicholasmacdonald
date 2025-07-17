import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const randomChars = Array.from("!@£$%^&*()_+[];',./{}:\"<>?\\|1234567890-=¡€#¢∞§¶•ªº–≠");

const ScrambledLetter = memo(({ targetChar, phase, delay, as: Tag = 'span' }) => {
  const [displayChar, setDisplayChar] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const MotionTag = motion.create(Tag);

  useEffect(() => {
    let timeout;
    let interval;

    // Animate in
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
        }, 100); // Calibration Point 1: Scramble speed for "in" (100ms per cycle)
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
        }, 100); // Calibration Point 2: Scramble speed for "out" (100ms per cycle)
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
      transition={{ duration: 0.3 }} // Calibration Point 3: Opacity transition duration
      style={{
        display: 'inline-block',
        pointerEvents: 'none',
        Height: '120px', // Calibration Point 4: Stabilize letter height
      }}
    >
      {displayChar}
    </MotionTag>
  );
});

const CyclingScrambledText = ({ words = [], className = '', interval = 3000, as: Tag = 'span', startDelay = 0 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState('in');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (words.length <= 1) return;

    const totalDuration = interval; // Calibration Point 5: Word cycle interval (3000ms default)

    const animateCycle = setInterval(() => {
      setPhase('out');
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setPhase('in');
      }, 1000); // Calibration Point 6: Total "out" animation duration (1000ms)
    }, totalDuration);

    return () => clearInterval(animateCycle);
  }, [words, interval]);

  return (
    <div
      className={className}
      data-cursor="title"
      style={{
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        height: '120px', // Calibration Point 7: Stabilize container height
      }}
    >
      {currentWord.split('').map((char, index) => {
        const delay = phase === 'out'
          ? (currentWord.length - 1 - index) * 100 // Calibration Point 8: Reverse stagger delay (100ms per letter)
          : index * 100; // Calibration Point 9: Forward stagger delay (100ms per letter)
        return (
          <ScrambledLetter
            key={`${currentWord}-${index}`}
            targetChar={char}
            phase={shouldAnimate ? phase : 'in'}
            delay={delay}
            as={Tag}
          />
        );
      })}
    </div>
  );
};

export default memo(CyclingScrambledText);