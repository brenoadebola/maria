// Importe as funções que você precisa dos SDKs que você usa
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAv3g3-Gjp2OYLNG3PgVczwBFSQXAxcDj0",
  authDomain: "maria-18e7a.firebaseapp.com",
  projectId: "maria-18e7a",
  storageBucket: "maria-18e7a.firebasestorage.app",
  messagingSenderId: "187919316652",
  appId: "1:187919316652:web:153b6f5758859e14f25109"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firebase Storage
const storage = getStorage(app);

export { storage, ref, uploadBytesResumable, getDownloadURL, listAll };
