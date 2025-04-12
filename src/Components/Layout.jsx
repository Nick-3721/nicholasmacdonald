import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '@/Components/nav'

export default function Layout() {
  return (
    <>
      <Nav/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}