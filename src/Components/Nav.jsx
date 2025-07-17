import React from 'react'
import RevealLink from '@/Components/RevealLink'
import ThemeToggle from '@/Components/ThemeToggle'
import Logo from '@/Components/Logo'
import { useTheme } from '@/styles/ThemeProvider'



export default function Nav() {
const { theme } = useTheme(); 

  return (
    // <header>
    //     <div className='top'>
    //       <div className="theme-toggle-container">
    //         <ThemeToggle />
    //       </div>
    //       <Logo />
    //       <div className="nav-links">
    //         <RevealLink href="https://github.com/Nick-3721" newTab={true}>Github</RevealLink>
    //         <RevealLink href="/work" newTab={false}>Work</RevealLink>
    //         <RevealLink href="https://www.linkedin.com/in/nicholasmacdonalddesign/" newTab={true}>LinkedIn</RevealLink>
    //       </div>
    //     </div>
    //   <div className="bottom">
    //     <RevealLink href="../../../public/Nicholas-MacDonald_CV.jpg" newTab={true}>CV</RevealLink>
    //     <p style={{color: "white"}} className="right">{new Date().getFullYear()}©</p>
    //   </div>
    // </header>
      <header>
        <div className="nav-top">
          <Logo />
          <div className="nav-links">
            <RevealLink href="https://github.com/Nick-3721" newTab>Github</RevealLink>
            <RevealLink href="https://www.linkedin.com/in/nicholasmacdonalddesign/" newTab>LinkedIn</RevealLink>
          </div>
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
        </div>
        <div className="nav-middle">
          <RevealLink to="/work">Work</RevealLink>
        </div>
        <div className="nav-bottom">
          <RevealLink to="/about" newTab>About</RevealLink>
          <p
            data-cursor="hover"
            style={{color: theme.secondaryColor, fontFamily: 'degular, sans-serif'}}
            className="right"
          > © {new Date().getFullYear()}</p>
        </div>
      </header>
  )
}
