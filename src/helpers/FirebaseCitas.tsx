import { getAuth } from "firebase/auth"
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore"; 
import { citaValusTypes } from "../context/CitasContext";
import { db } from "../firebase/FirebaseConfig";

export interface citaData {
    especialidad: string, 
    fecha: string, 
    hora: string, 
    medico: string, 
    paciente: string, 
    sintomas: string
}

export interface docsCitas {
    data: citaData,
    id: string
}

export const fbCreateCita = async(cita: citaValusTypes) => {
    
    const auth = getAuth()
    
    if (auth.currentUser?.uid != null) {
        const docRef = await addDoc(collection(db, auth.currentUser.uid), {paciente: auth.currentUser.displayName, ...cita})   
        return docRef.id
    }
    return null
}

export const fbGetCitas = async():Promise<docsCitas[]|null> => {
    
    const auth = getAuth()

    if (auth.currentUser?.uid != null) {
        const q = query(collection(db, auth.currentUser.uid), orderBy('fecha', 'asc'))
        const querySnapshot = await getDocs(q)

        const documents = querySnapshot.docs.map((doc) => {
            return {
              data: doc.data() as citaData,
              id: doc.id
            }
          });
    

        return documents
    }
    return null
}

export const fbDeleteCita = async (id:string) => {

    const auth = getAuth()
    
    if(auth.currentUser?.uid != null) {
        const deleteCita = await deleteDoc(doc(db, auth.currentUser.uid, id))
    }
}