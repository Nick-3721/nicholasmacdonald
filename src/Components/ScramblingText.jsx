import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { randomChars } from '@/utils/Constants/randomChars';

const ScrambledLetter = memo(({ targetChar, phase, delay, as: Tag = 'span', index }) => {
  const [displayChar, setDisplayChar] = useState(targetChar); // Initialize with targetChar
  const [isVisible, setIsVisible] = useState(true);

  const MotionTag = motion.create(Tag);

  useEffect(() => {
    let timeout;
    let interval;

    // Handle spaces
    if (targetChar === ' ') {
      setDisplayChar('\u00A0');
      setIsVisible(true);
      return;
    }

    // Animate based on phase
    if (phase === 'in') {
      setDisplayChar(''); // Start empty for "in" animation
      setIsVisible(false);
      timeout = setTimeout(() => {
        let count = 0;
        interval = setInterval(() => {
          if (count < 3) {
            setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)]);
            setIsVisible(true); // Visible during scrambling
            count++;
          } else {
            clearInterval(interval);
            setDisplayChar(targetChar);
            setIsVisible(true);
          }
        }, 100); // Scramble speed for "in" (100ms per cycle)
      }, delay);
    } else if (phase === 'out') {
      // Keep targetChar until delay is reached
      setDisplayChar(targetChar);
      setIsVisible(true);
      timeout = setTimeout(() => {
        let count = 0;
        interval = setInterval(() => {
          if (count < 3) {
            setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)]);
            setIsVisible(true); // Visible during scrambling
            count++;
          } else {
            clearInterval(interval);
            setDisplayChar('');
            setIsVisible(false); // Hide after scrambling
          }
        }, 100); // Scramble speed for "out" (100ms per cycle)
      }, delay);
    } else {
      setDisplayChar(targetChar); // Static display if no phase
      setIsVisible(true);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [targetChar, phase, delay]);

  return (
    <MotionTag
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }} // Opacity transition duration
      style={{
        display: 'inline-block',
        whiteSpace: 'pre',
        pointerEvents: 'none',
      }}
    >
      {displayChar}
    </MotionTag>
  );
});

const ScrambledText = ({
  text = '',
  words = [],
  as: Tag = 'span',
  className = '',
  cycle = false,
  interval = 3000,
  startDelay = 0,
  trigger = 'inView', // 'inView' or 'timer'
  staggerDelay = 100, // Delay per letter
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: !cycle });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState('in');
  const [shouldAnimate, setShouldAnimate] = useState(trigger !== 'inView');

  // Determine current text
  const currentText = cycle && words.length > 0 ? words[currentWordIndex] : text;

  // Handle start delay
  useEffect(() => {
    if (trigger !== 'inView' || isInView) {
      const timeout = setTimeout(() => setShouldAnimate(true), startDelay);
      return () => clearTimeout(timeout);
    }
  }, [startDelay, trigger, isInView]);

  // Handle cycling
  useEffect(() => {
    if (!cycle || words.length <= 1 || !shouldAnimate) return;

    const totalDuration = interval;
    // Ensure outDuration covers full reverse stagger + scrambling
    const outDuration = (currentText.length - 1) * staggerDelay + 400; // 300ms for scrambling + 100ms buffer
    const animateCycle = setInterval(() => {
      setPhase('out');
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setPhase('in');
      }, outDuration);
    }, totalDuration);

    return () => clearInterval(animateCycle);
  }, [cycle, words, interval, shouldAnimate, currentText.length, staggerDelay]);

  const MotionTag = motion.create(Tag);

  return (
    <div
      className={className}
      data-cursor="title"
      style={{
        textAlign: 'left',
        display: 'block',
        whiteSpace: 'pre',
        width: 'fit-content',
      }}
    >
      <MotionTag
        ref={ref}
        initial="hidden"
        animate={shouldAnimate ? 'visible' : 'hidden'}
        style={{ display: 'inline-block', whiteSpace: 'pre' }}
      >
        {currentText.split('').map((char, index) => {
          // Reverse stagger for "out" phase, forward for "in"
          const delay = cycle && phase === 'out'
            ? (currentText.length - 1 - index) * staggerDelay
            : index * staggerDelay;
          return (
            <ScrambledLetter
              key={`${currentText}-${char}-${index}`}
              targetChar={char}
              phase={shouldAnimate ? phase : 'in'}
              delay={delay}
              as={Tag}
              index={index}
            />
          );
        })}
      </MotionTag>
    </div>
  );
};

export default memo(ScrambledText);