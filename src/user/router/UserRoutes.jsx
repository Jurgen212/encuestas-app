import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserPage } from '../pages/UserPage'

export const UserRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element = { <UserPage/> }/>
    </Routes>
  )
}
