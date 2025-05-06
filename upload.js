import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
const storage = getStorage(app);
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const fileRef = ref(storage, 'imagens/' + file.name);
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  addImageToGallery(url);
});

function addImageToGallery(url) {
  const img = document.createElement("img");
  img.src = url;
  img.style.width = "200px";
  img.style.margin = "10px";
  gallery.appendChild(img);
}

// Listar imagens já salvas
async function loadGallery() {
  const listRef = ref(storage, 'imagens/');
  const res = await listAll(listRef);
  for (const itemRef of res.items) {
    const url = await getDownloadURL(itemRef);
    addImageToGallery(url);
  }
}
loadGallery();
