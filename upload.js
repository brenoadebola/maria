import { storage } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

document.getElementById("fileInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const storageRef = ref(storage, 'fotos/' + file.name);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  adicionarImagem(url);
});

export async function carregarFotos() {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = ""; // limpa antes
  const folderRef = ref(storage, 'fotos');
  const res = await listAll(folderRef);

  res.items.forEach(async (itemRef) => {
    const url = await getDownloadURL(itemRef);
    adicionarImagem(url);
  });
}

function adicionarImagem(url) {
  const galeria = document.getElementById("galeria");
  const img = document.createElement("img");
  img.src = url;
  galeria.appendChild(img);
}