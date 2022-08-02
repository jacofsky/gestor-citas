import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import Swal from 'sweetalert2'
import { githubProvider, googleProvider } from '../firebase/FirebaseConfig'


export const fbSinginEmailPassword = async(email: string, password: string) => {
    const auth = getAuth()

    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        Swal.fire({
            title: 'Usuario o contraseña equivocados',
            icon: 'error',
            confirmButtonColor: '#393e46',
            confirmButtonText: 'Ok',
            background: '#eeeeee'
        })
        
        return null
          
    }

}

export const fbRegister = async(email: string, password: string, name:string) => {
    const auth =  getAuth()

    try {
        const user =  await createUserWithEmailAndPassword(auth, email, password)
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, {
                displayName: name
            })
        }
        
        return user 
        
    } catch (error) {
        Swal.fire({
            title: 'Registro fallido',
            icon: 'error',
            confirmButtonColor: '#393e46',
            confirmButtonText: 'Ok',
            background: '#eeeeee'
        })
        
        return null
          
    }

}

export const fbGoogleRegister = async() => {
    const auth = getAuth()
    const prov = googleProvider
    prov.addScope('https://www.googleapis.com/auth/contacts.readonly');
    
    const user = await signInWithPopup(auth, prov)
    
    return user
}

export const fbGithubRegister = async() => {
    const auth = getAuth()
    const prov = githubProvider
    prov.addScope('repo');
    
    const user = await signInWithPopup(auth, prov)
    
    return user
}