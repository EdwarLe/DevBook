const newPost = document.getElementById("new-post")
const modalNewPost = document.getElementById("modal-new-post")
const btnBackPost = document.getElementById("btn-back-post")
const btnVideoPost = document.getElementById("btn-video-file")
const btnPhotoPost = document.getElementById("btn-photo-file")
const uploadVideo = document.getElementById("video-file")
const uploadPhoto = document.getElementById("photo-file")
const btnPost = document.getElementById("btn-post")
const nameUserPost = document.getElementById("name-user-post")
const imgUserPost = document.getElementById("img-user-post")
const msgPost = document.getElementById("msg-post")




let postIdCount = 11;

// Función para abrir el explorador de archivos para subir vídeos
btnVideoPost.addEventListener('click', () => {
    uploadVideo.click()
})

// Función para abrir el explorador de archivos para subir imágenes
btnPhotoPost.addEventListener('click', () => {
    uploadPhoto.click()
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
modalNewPost.addEventListener('submit', (e) => {
    e.preventDefault()
    let idToString = postIdCount.toString()

    const dataPostLocal = JSON.parse(localStorage.getItem('posts'))

    const datePost = new Date()

    let mediaData = [];

    if (uploadVideo.value) {
        mediaData.push({
            "type": "video",
            "url": uploadVideo.value
        })
        msgPost.value += uploadVideo.value
        msgPost.value += "\n"
    }
    if (uploadPhoto.value) {
        mediaData.push({
            "type": "image",
            "url": uploadPhoto.value
        })
        msgPost.value += uploadPhoto.value
        msgPost.value += "\n"
    }

    if (msgPost.value === '') {
        confirm('¿Quieres descartar los cambios?')
        closeModal()
        return
    }

    const newPost = {
        "id": idToString,
        "user": {
            "id": "user_1",
            "name": nameUserPost.outerText,
            "profile_picture": imgUserPost.src
        },
        "content": {
            "text": msgPost.value,
            "media": mediaData,
            "link": null
        },
        "timestamp": datePost,
        "likes": 0,
        "comments": [],
        "shares": 0
    }


    dataPostLocal.push(newPost)

    localStorage.setItem('posts', JSON.stringify(dataPostLocal))

    postIdCount++
    closeModal()
    msgPost.value = ''
    location.reload()
})



