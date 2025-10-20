import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '@/Components/layout/Nav'
import Cursor from '@/Components/layout/Cursor'

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