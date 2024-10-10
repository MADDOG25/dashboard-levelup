import { initializeApp } from "firebase/app"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD7lgmWEZuIhnYQCmEZHtaKwnD2PyU2Czs",
    authDomain: "levelup-245ce.firebaseapp.com",
    projectId: "levelup-245ce",
    storageBucket: "levelup-245ce.appspot.com",
    messagingSenderId: "419357884343",
    appId: "1:419357884343:web:7687fd3f9d8687eb843232",
    measurementId: "G-JCHCHPSVDX"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

//Persistencia de sesion
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("Sesión persistida")
    })
    .catch((error) => {
        console.error("Error al persistir la sesión: ", error.message)
    })

export { auth }