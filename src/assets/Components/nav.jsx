import React from 'react'
import RevealLink from './RevealLink'
import ThemeToggle from './ThemeToggle'


export default function Nav() {
  return (
    <div className="wrapper">
      <nav>
        <div className="logo-container">
          <a href="/">
            <svg id="nav-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 31.9 32">
              <polygon points="6.7 9.8 6.6 9.8 6.6 13.1 6.6 26.9 6.6 26.9 10.4 26.9 10.4 32 10.5 32 17.8 32 19.6 32 6.7 9.8"/>
              <polygon points="21.5 5.1 21.5 0 21.3 0 14.1 0 12.3 0 25.2 22.2 25.3 22.2 25.3 18.9 25.3 5.1 25.3 5.1 21.5 5.1"/>
            </svg>
          </a>
        </div>
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <div className="nav-links">
          <RevealLink href="https://github.com/Nick-3721" newTab={true}>Github</RevealLink>
          <RevealLink href="/work" newTab={false}>Work</RevealLink>
          <RevealLink href="https://www.linkedin.com/in/nicholasmacdonalddesign/" newTab={true}>LinkedIn</RevealLink>
        </div>
      </nav>
    </div>
  )
}
