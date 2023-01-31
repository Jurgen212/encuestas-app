import React, { useEffect, useState } from 'react'
import './templateStyle.css'


import { useDispatch, useSelector } from 'react-redux'
import { SpinnerCarga } from '../../components/SpinnerCarga';
import { ModalWarning } from '../components/ModalWarning';
import { startLogOut } from '../../store';

export const AuthTemplate = ({ children, titleInfo = '' }) => {

  const { status, errorMessage } = useSelector( state => state.auth );
  const [open, setOpen] = useState( false );
  const dispatch = useDispatch();


  const handleOpen      = () => setOpen(true);
  const handleClose     = () => {

    dispatch( startLogOut() );
    setOpen(false)
  };


  useEffect(() => {
    
    if( errorMessage !== null ) handleOpen()  ;
  }, [ status ] );
  

  if( status === 'checking' ) return ( 
  
    <div className='contain
                    principal-container'>

        <div className='form-container'>{ <SpinnerCarga/> }</div>
    </div> )
  

  else return (
    <div className='contain
                    principal-container'>
        
        <ModalWarning open={ open } handleClose = { handleClose } titleInfo ={ titleInfo }/>
      
        <div className='form-container'>
          
              <h1 className   ='title-container'>{ titleInfo }</h1>                      
              <div className  ='inputs-container'>
                { children  }
              </div>
        </div>
    </div>
  )
}
