import React from 'react'
import RevealLink from './RevealLink'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import { header } from 'framer-motion/client'


export default function Nav() {
let year = () => new Date().getFullYear() 
  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
          <Logo />
          <div className="nav-links">
            <RevealLink href="https://github.com/Nick-3721" newTab={true}>Github</RevealLink>
            <RevealLink href="/work" newTab={false}>Work</RevealLink>
            <RevealLink href="https://www.linkedin.com/in/nicholasmacdonalddesign/" newTab={true}>LinkedIn</RevealLink>
          </div>
        </nav>
      </div>
      <div className="wrapper">
        <div className="bottom">
          <RevealLink href="../../../public/Nicholas-MacDonald_CV.jpg" newTab={true}>CV</RevealLink>
          <p style={{color: "white"}} className="right">{new Date().getFullYear()}©</p>
        </div>
      </div>
    </header>
  )
}
