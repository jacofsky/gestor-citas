import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { githubProvider, googleProvider } from '../firebase/FirebaseConfig'


export const fbSinginEmailPassword = async(email: string, password: string) => {
    const auth = getAuth()

    const user = await signInWithEmailAndPassword(auth, email, password)

    return user
}

export const fbRegister = async(email: string, password: string, name:string) => {
    const auth =  getAuth()

    const user =  await createUserWithEmailAndPassword(auth, email, password)
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    
    return user 

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