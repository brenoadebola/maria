
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv3g3-Gjp2OYLNG3PgVczwBFSQXAxcDj0",
  authDomain: "maria-18e7a.firebaseapp.com",
  projectId: "maria-18e7a",
  storageBucket: "maria-18e7a.appspot.com",
  messagingSenderId: "187919316652",
  appId: "1:187919316652:web:153b6f5758859e14f25109"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, listAll, getDownloadURL };
