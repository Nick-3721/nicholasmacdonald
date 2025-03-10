import React from 'react'
import { motion } from 'framer-motion'

const DURATION = 0.35;
const STAGGER = 0.05;

export default function RevealLink ({ children, href, newTab}) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="flip-link"
      target={`${newTab ? "_blank" : "" }`}
    >
      <div>
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              style={{display: "inline-block"}}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-190%" },
              }} 
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i
              }}
            key={i}>{letter}</motion.span>
          )
        })}
      </div>

      <div className="flip-link-line2">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              style={{display: "inline-block"}}
              variants={{
                initial: { y: "190%" },
                hovered: { y: 0 },
              }} 
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i
              }}
            key={i}>{letter}</motion.span>
          )
        })}
      </div>
    </motion.a>

    // <motion.a
    //   initial="initial"
    //   whileHover="hovered"
    //   href={href}
    //   className='flip-link'
    // >
    //   <motion.div
    //     variants={{
    //       initial: { y: 0 },
    //       hovered: { y: "-190%" },
    //     }}
    //   >
    //     {children}
    //   </motion.div>

    //   <motion.div
    //   className='flip-link-line2'
    //     variants={{
    //       initial: { y: "190%" },
    //       hovered: { y: 0 },
    //     }}
    //   >
    //     {children}
    //   </motion.div>
    // </motion.a>
  );
}