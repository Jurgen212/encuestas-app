import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "../config"


export const signInWithGoogle = async () =>{

    try {
        
        const result                        = await signInWithPopup( FirebaseAuth, new GoogleAuthProvider() );
        const { displayName, email, uid }   = result.user;


        return{
            ok: true, 
            displayName, email, uid
        }

    } catch (   err ) {
        
        return{
            ok              : false,
            errorMessage    : err.message
        }
    }
}


export const registerUserWithEmail = async({ displayName, email, password }) =>{

    try {
        
        const resp      = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid }   = resp.user;

        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        } );

        return{
            ok: true,
            uid, displayName, email
        }

    } catch (err) {
        return {
            ok          : false,
            errorMessage: err.message
        }
    }
}



export const loginWithEmail = async({ email, password }) =>{

    try {
        
        const resp                  = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, displayName }  = resp.user;

        return{
            ok: true,
            uid, displayName, email
        }

    } catch (err) {
        
        
        return{
            ok          : false, 
            errorMessage: err.message
        }
    }
}


export const logoutFirebase = async( ) =>{
    return await FirebaseAuth.signOut();
}