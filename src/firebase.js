import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  // Reemplaza esto con tus credenciales de Firebase
  apiKey: "AIzaSyC0wTW8TOupBlPc2jOG7_GwZzQ8CIUAaSs",
  authDomain: "fir-1-95ff9.firebaseapp.com",
  projectId: "fir-1-95ff9",
  storageBucket: "fir-1-95ff9.firebasestorage.app",
  messagingSenderId: "207756572156",
  appId: "1:207756572156:web:2674aeb43282ad8fd8ee79",
  measurementId: "G-9DPY6PVFZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };