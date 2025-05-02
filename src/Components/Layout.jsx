import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '@/Components/nav'
import Cursor from './Cursor'

export default function Layout() {
  return (
    <>
      <Cursor />
      <Nav/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}