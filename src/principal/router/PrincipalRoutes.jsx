import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrincipalPage } from '../pages/PrincipalPage'

export const PrincipalRoutes = () => {
  return (
    <Routes>
        <Route path='/principal' element = { <PrincipalPage/> } />

        <Route path='/*' element = { <Navigate to={'/principal'} /> }/>
    </Routes>
  )
}
