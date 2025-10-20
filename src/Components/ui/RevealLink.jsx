import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import styles from './RevealLink.module.css';


const DURATION = 0.35;
const STAGGER = 0.05;

export default function RevealLink ({ children, href, newTab, to, }) {
  const isRouterLink = !!to;

  const props = isRouterLink
    ? { to }
    : { href, 
        target: newTab ? "_blank" : undefined, 
        rel: newTab ? "noopener noreferrer" : undefined,
      };

  const Component = isRouterLink ? Link : 'a';

  return (
    <motion.div initial="initial" whileHover="hovered">
      <Component 
        className={styles.flipLinkBase} 
        data-cursor="hover" 
        {...props}
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

        <div className={styles.flipLinkInner}>
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
      </Component>
    </motion.div>

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