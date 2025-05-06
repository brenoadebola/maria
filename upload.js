import { storage, ref, uploadBytesResumable, getDownloadURL } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const galeriaDiv = document.getElementById('galeria');

    fileInput.addEventListener('change', handleFileUpload);
});

async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const storageRef = ref(storage, `casal/${file.name}`); // 'casal/' é a pasta no Storage
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Acompanhamento do progresso do upload (opcional)
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Tratar erros de upload
                console.error("Erro no upload:", error);
            },
            async () => {
                // Upload concluído com sucesso, obtenha a URL de download
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('File available at', downloadURL);
                // Aqui você pode adicionar a URL à galeria ou salvar no Firestore
                adicionarFotoGaleria(downloadURL);
            }
        );
    }
}

function adicionarFotoGaleria(url) {
    const galeriaDiv = document.getElementById('galeria');
    const img = document.createElement('img');
    img.src = url;
    galeriaDiv.appendChild(img);
}
