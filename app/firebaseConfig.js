// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpQZXiUUkVVOJHfQZF6NOpNdCx2Q0uYsY",
    authDomain: "erastoaula.firebaseapp.com",
    projectId: "erastoaula",
    storageBucket: "erastoaula.appspot.com",
    messagingSenderId: "502138201102",
    appId: "1:502138201102:web:ac6286c2f9407111b4885f"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

export { db };
