import { loginWithEmail, logoutFirebase, registerUserWithEmail, signInWithGoogle } from "../../firebase";
import { checkingData, login, logout } from "./authSlice"


export const startSignInWithGoogle = () =>{

    return async ( dispatch ) =>{

        dispatch( checkingData() );
        
        const result    = await signInWithGoogle();
        if( !result ) dispatch( logout( result.errorMessage ) );
        else dispatch( login( result ));
    }
};


export const startCreateUserWithEmail = ({ displayName, email, password }) =>{

    return async( dispatch ) =>{

        dispatch( checkingData() );
        const result = await registerUserWithEmail({ displayName, email, password });
        if( !result.ok ) dispatch( logout( result.errorMessage ) );
        
        else dispatch( login( result ));
    }
}


export const startSignInWithEmail = ({ email, password }) =>{

    return async( dispatch ) =>{

        dispatch( checkingData());

        const result = await loginWithEmail({ email, password });
        if( !result.ok ) dispatch( logout( result.errorMessage ) );

        
        else dispatch( login( result ));
    }
}

export const startLogOut = () =>{

    return async( dispatch ) =>{
        
        await logoutFirebase();
        dispatch( logout( null ) );
    }
}

