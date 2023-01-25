import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    
    <Routes>

        <Route path='/auth/*'   element={}/>
        <Route path='/*'        element={}/>
        <Route path='/user/*'   element={}/>

        <Route path='/*' element={ <Navigate to={'/auth/login'}/>}/>
    </Routes>
  )
}
