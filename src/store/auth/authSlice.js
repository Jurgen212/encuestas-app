import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
        name: 'auth',
        initialState: {
            
            status      : 'not-authenticated',    //checking / not-authenticated / authenticated,
            displayName : null,
            email       : null,
            uid         : null,
            errorMessage: null
        },
        reducers: {
            
            login: ( state, { payload } ) =>{

                state.status        = 'authenticated'    ;
                state.displayName   = payload.displayName;
                state.email         = payload.email      ;
                state.uid           = payload.uid        ;
                state.errorMessage  = null                  
            },
            
            logout: ( state, { payload } ) =>{

                state.status        = 'not-authenticated'   ;
                state.displayName   = null                  ;
                state.email         = null                  ;
                state.uid           = null                  ;
                state.errorMessage  = payload               ;    
            },

            checkingData: ( state ) =>{
                state.status = 'checking'
            }
        }
});

export const { login, logout, checkingData } = authSlice.actions;