import React from 'react'
import RevealLink from '@/Components/ui/RevealLink'
import ThemeToggle from '@/Components/ui/ThemeToggle'
import Logo from '@/Components/ui/Logo'
import styles from './Nav.module.css'



export default function Nav() { 

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
      <header className={styles.header}>
        <div className={styles.top}>
          <Logo />
          <div className={styles.links}>
            <RevealLink href="https://github.com/Nick-3721" newTab>Github</RevealLink>
            <RevealLink href="https://www.linkedin.com/in/nicholasmacdonalddesign/" newTab>LinkedIn</RevealLink>
          </div>
          <div className={styles.themeToggle}>
            <ThemeToggle />
          </div>
        </div>
        <div className={styles.middle}>
          <RevealLink to="/work">Work</RevealLink>
        </div>
        <div className={styles.bottom}>
          <div className={styles.links}>
            <RevealLink to="/about" newTab>About</RevealLink>
            <RevealLink href="mailto:hello@nicholasmacdonald.com" newTab>Contact</RevealLink>
          </div>
          <p
            data-cursor="hover"
            className={`${styles.copyright} ${styles.right}`}
          > © {new Date().getFullYear()}</p>
        </div>
      </header>
  )
}
