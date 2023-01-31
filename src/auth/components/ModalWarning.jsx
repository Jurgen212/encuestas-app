import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useSelector } from 'react-redux'

const style = {
  position  : 'absolute',
  top       : '50%',
  left      : '50%',
  transform : 'translate(-50%, -50%)',
  width     : 400,
  bgcolor   : 'var(--dark-green)',
  border    : '1px solid var(--green)',
  boxShadow : 24,
  p         : 4,
};

export const ModalWarning = ({ open = false , handleClose, titleInfo  }) => {

  const { errorMessage }= useSelector( state => state.auth );
  

  return (

    <div>
      <Modal
        open={ open }
        onClose={ () => handleClose() }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2" color="white">
            Error en { titleInfo }
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }} color="white">

            { errorMessage }
          </Typography>
        </Box>
      </Modal>
    </div>
  );

  return;
}