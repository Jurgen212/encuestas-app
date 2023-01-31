import React from 'react'

import './authStyles.css'
import { AuthTemplate } from '../template/AuthTemplate'

import { Link } from 'react-router-dom'
import { GoogleProvider } from '../components/GoogleProvider'

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut, startSignInWithEmail } from '../../store'
import { ModalWarning } from '../components/ModalWarning'



export const LoginPage = () => {

  const { register, formState: { errors } ,handleSubmit } = useForm();

  const { errorMessage }  = useSelector( state => state.auth );
  const dispatch          = useDispatch( state => state.auth );
  

  const onSubmit = ( data ) =>{
    //Aqui logica de inicio de sesíon con correo
    dispatch( startSignInWithEmail( data ));
  }

  return (

    <AuthTemplate titleInfo='Inicia Sesión'>
      
      <ModalWarning/>
      <form autoComplete='off'
            onSubmit={ handleSubmit( onSubmit ) }>
        

        { ( errors.email?.type !== undefined || errors.password?.type !== undefined ) && <p className ='advertencia'>Todos los campos son obligatorios</p> }

        <input  placeholder='Correo'
                { ...register('email',{
                  required: true
                })}/>

        <input  placeholder ='Contraseña'
                type        ='password'
                name        ="password"
                autoComplete="on"
                { ...register('password',{
                  required: true
                }) }/>

        <button type='submit'>Ingresar</button>
        
        
        <div>
          <GoogleProvider/>
        </div>

        <Link to={'/auth/register'}
              className="link"
              >¿Aún no tienes una cuenta? Click aquí</Link>

        
      </form>
    </AuthTemplate>
  )
}
