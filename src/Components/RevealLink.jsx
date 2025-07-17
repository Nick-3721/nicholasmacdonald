import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '@/styles/ThemeProvider';


const DURATION = 0.35;
const STAGGER = 0.05;


const FlipLinkBase = styled.span`
  font-family: "degular", sans-serif;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  font-size: clamp(0.7rem, 0.3rem + 1.2vw, 1rem);
  color: ${({ theme }) => theme.secondaryColor};
  height: fit-content;
`;


const FlipLinkInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default function RevealLink ({ children, href, newTab, to, }) {
  const isRouterLink = !!to;

  const props = isRouterLink
    ? { to }
    : { href, 
        target: newTab ? "_blank" : undefined, 
        rel: newTab ? "noopener noreferrer" : undefined,
      };

  return (
    <motion.div initial="initial" whileHover="hovered">
      <FlipLinkBase data-cursor="hover" as={isRouterLink ? Link : 'a'} {...props}>
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

        <FlipLinkInner>
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
        </FlipLinkInner>
      </FlipLinkBase>
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