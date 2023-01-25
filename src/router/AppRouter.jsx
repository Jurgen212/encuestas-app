import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/router/AuthRoutes'
import { PrincipalRoutes } from '../principal/router/PrincipalRoutes'
import { UserRoutes } from '../user/router/UserRoutes'

export const AppRouter = () => {
  return (
    
    <Routes>

        <Route path='/auth/*'   element={ <AuthRoutes       /> }/>
        <Route path='/*'        element={ <PrincipalRoutes  /> }/>
        <Route path='/user/*'   element={ <UserRoutes       /> }/>

        <Route path='/*' element={ <Navigate to={'/auth/login' } />}/>
    </Routes>
  )
}
