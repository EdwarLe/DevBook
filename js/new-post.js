const newPost = document.getElementById("new-post")
const modalNewPost = document.getElementById("modal-new-post")
const btnBackPost = document.getElementById("btn-back-post")

const openModal = () => {
    modalNewPost.style.top = '0'
}

const closeModal = () => {
    modalNewPost.style.top = '100%'
}

btnBackPost.addEventListener('click', closeModal)
newPost.addEventListener('click', openModal)

