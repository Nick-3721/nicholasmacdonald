import React from 'react'
import RevealLink from './RevealLink'


export default function nav() {
  return (
    <div>
      <RevealLink href="https://github.com/Nick-3721" newTab={true}>Github</RevealLink>
      <RevealLink href="/work" newTab={false}>Work</RevealLink>
      <RevealLink href="https://www.linkedin.com/in/nicholasmacdonalddesign/" newTab={true}>LinkedIn</RevealLink>
    </div>
  )
}
