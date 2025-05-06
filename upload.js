
import { storage, ref, uploadBytes, listAll, getDownloadURL } from './firebase.js';

const fileInput = document.getElementById('imageInput');
const gallery = document.getElementById('gallery');

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const storageRef = ref(storage, 'fotos/' + file.name);
  await uploadBytes(storageRef, file);
  alert("Foto enviada com sucesso!");
  loadGallery(); // Atualiza a galeria após upload
});

async function loadGallery() {
  gallery.innerHTML = '';
  const listRef = ref(storage, 'fotos/');
  const result = await listAll(listRef);

  for (const itemRef of result.items) {
    const url = await getDownloadURL(itemRef);
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '150px';
    img.style.margin = '10px';
    gallery.appendChild(img);
  }
}

window.onload = loadGallery;
