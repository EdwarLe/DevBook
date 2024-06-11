const newPost = document.getElementById("new-post")
const modalNewPost = document.getElementById("modal-new-post")
const btnBackPost = document.getElementById("btn-back-post")
const btnVideoPost = document.getElementById("btn-video-file")
const btnPhotoPost = document.getElementById("btn-photo-file")
const uploadVideo = document.getElementById("video-file")
const uploatPhoto = document.getElementById("photo-file")

// Función para abrir el explorador de archivos para subir vídeos
btnVideoPost.addEventListener('click', () => {
    uploadVideo.click()
})

// Función para abrir el explorador de archivos para subir imágenes
btnPhotoPost.addEventListener('click', () => {
    uploatPhoto.click()
})

// Función para abrir el modal
const openModal = () => {
    modalNewPost.style.top = '0'
}

// Función para cerrar el modal
const closeModal = () => {
    modalNewPost.style.top = '100%'
}

btnBackPost.addEventListener('click', closeModal)
newPost.addEventListener('click', openModal)



