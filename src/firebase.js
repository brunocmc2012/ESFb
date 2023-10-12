import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional (Esse é meu db.firebase pessoal. Usar config.firebase já criada no projeto no lugar dessa!)
const firebaseConfig = {
  apiKey: "AIzaSyAVuAKTO3J70x4iRf_bP6orT1yB3te6zd0",
  authDomain: "esfb-888e5.firebaseapp.com",
  projectId: "esfb-888e5",
  storageBucket: "esfb-888e5.appspot.com",
  messagingSenderId: "195277464453",
  appId: "1:195277464453:web:090de1beaad39d62175aec"
};

const app = initializeApp(firebaseConfig);

// Obtenção das instâncias do Auth, Firestore e Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, auth };