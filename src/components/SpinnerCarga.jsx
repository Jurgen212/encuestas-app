import React from 'react'
import './componentsStyle.css'

export const SpinnerCarga = () => {
  return (
    <div className="text-center contain-spinner">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
