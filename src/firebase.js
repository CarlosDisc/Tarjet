import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3KLsD6C_msiqI0JQ0EwLuUkVVFE53Pn8",
    authDomain: "tarjet-2df47.firebaseapp.com",
    projectId: "tarjet-2df47",
    storageBucket: "tarjet-2df47.firebasestorage.app",
    messagingSenderId: "281643269778",
    appId: "1:281643269778:web:ca0670d9b25deccf98304b",
    measurementId: "G-L4HPQ9CX6S"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuario autenticado:", user);
  } catch (error) {
    console.error("Error en la autenticación:", error);
  }
};

export { auth, signInWithGoogle };
