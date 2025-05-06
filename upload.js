import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { app } from './firebase.js';

const storage = getStorage(app);
const uploadInput = document.getElementById("upload");
const gallery = document.getElementById("gallery");

function showImage(url) {
  const img = document.createElement("img");
  img.src = url;
  img.style.maxWidth = "200px";
  img.style.margin = "10px";
  gallery.appendChild(img);
}

uploadInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const storageRef = ref(storage, `fotos/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  showImage(url);
});

// Carregar todas as imagens já salvas no Firebase
async function loadGallery() {
  const listRef = ref(storage, 'fotos/');
  const res = await listAll(listRef);

  for (const item of res.items) {
    const url = await getDownloadURL(item);
    showImage(url);
  }
}

loadGallery();
