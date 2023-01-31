import React from 'react'

import './authStyles.css'
import { AuthTemplate } from '../template/AuthTemplate'

import { Link } from 'react-router-dom'
import { GoogleProvider } from '../components/GoogleProvider'

import { useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'
import { startCreateUserWithEmail, startLogOut } from '../../store'
import { ModalWarning } from '../components/ModalWarning'

const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RegisterPage = () => {


  const { register, formState: { errors } ,handleSubmit, watch } = useForm();

  const requiredAlert     = ( errors.nombre?.type === 'required' || errors.mail?.type === 'required' || errors.password?.type === 'required' || errors.passwordConfirm?.type === 'required' );
  const passwordLength    = ( errors.password?.type === 'minLength' );
  const passwordNotMatch  = ( errors.passwordConfirm?.type  !== undefined );
  const emailInvalid      = ( errors.email?.type  !== undefined );

  const dispatch          = useDispatch( );
  const { errorMessage }  = useSelector( state => state.auth );

  const onSubmit = ( data ) =>{

    const { name, email, password  } = data;

    const displayName = name;
    dispatch( startCreateUserWithEmail( { displayName, email, password } ) );
  }

  return (

    <AuthTemplate titleInfo='Regístrate'>

        <ModalWarning/>
        <form autoComplete='off'
              onSubmit={ handleSubmit( onSubmit ) }>
            
            
            { ( requiredAlert     )  && <p className  ='advertencia'>Todos los campos son obligatorios            </p> }
            { ( passwordLength    )  && <p className  ='advertencia'>La contraseña debe tener minimo 6 caracteres </p> }
            { ( passwordNotMatch  )  && <p className  ='advertencia'>Las contraseñas deben coincidir              </p> }
            { ( emailInvalid      )  && <p className  ='advertencia'>El correo debe tener un formato valido       </p> }

          <input  placeholder='Nombre'                    
                  { ...register('name',{
                      required  : true,
                      maxLength : 30
                  })}/>
                  

          <input  placeholder='Correo'
                  { ...register('email',{
                      validate  : ( email ) => { if( !regexMail.test( email ) ) return 'InvalidEmail' }
                  })}/>

          <input  placeholder ='Contraseña'
                  type        ='password'
                  name        ="password"
                  autoComplete="on"
                  { ...register('password',{
                    required  : true,
                    minLength : 6
                  })}/>

          <input  placeholder='Repetir contraseña'
                  type        ='password'
                  name        ="password2"
                  autoComplete="on"
                  { ...register('passwordConfirm',{
                    required  : true,
                    validate  : ( val ) => { if( watch('password') !== val ) return 'Las contraseñas no coinciden' }
                  })}/>

          
          <button type='submit'>Crear cuenta</button>
          
          <div>
          <GoogleProvider/>
        </div>

          <Link to={'/auth/login'}
                className="link"
                >¿Ya tienes una cuenta? Click aquí</Link>
        </form>
    </AuthTemplate>
  )
}
