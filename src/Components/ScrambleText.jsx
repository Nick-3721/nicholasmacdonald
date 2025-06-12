import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView } from 'framer-motion';

const randomChars = Array.from("!@£$%^&*()_+[];',./{}:\"<>?|1234567890-=¡€#¢∞§¶•ªº–≠");

const ScrambledLetter = memo(({ targetChar, delay }) => {
  const [displayChar, setDisplayChar] = useState('');
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    let timeout;
    let interval; // declare interval in the outer scope

    if (!hasRevealed) {
      timeout = setTimeout(() => {
        let count = 0;
        interval = setInterval(() => {
          if (count < 3) {
            setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)]);
            count++;
          } else {
            clearInterval(interval);
            setDisplayChar(targetChar);
            setHasRevealed(true);
          }
        }, 100);
      }, delay);
    } else {
      setDisplayChar(targetChar); // skip animation if already revealed
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval); // now interval is defined
    };
  }, [targetChar, delay, hasRevealed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: hasRevealed ? 1 : 0.6 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'inline-block' }}
    >
      {displayChar}
    </motion.span>
  );
});

const ScrambleText = ({ text, as: Tag = 'span', className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const MotionTag = motion.create(Tag);

  return (
    <div className={className} data-cursor="title">
      <MotionTag
        ref={ref}
        initial="hidden"
        animate={hasAnimated ? 'visible' : 'hidden'}
        aria-hidden
        style={{ display: 'inline-block' }}
      >
        {[...text].map((char, index) => (
          <ScrambledLetter
            key={`${text}-${index}`}
            targetChar={char}
            delay={index * 90}
          />
        ))}
      </MotionTag>
    </div>
  );
};

export default memo(ScrambleText);
