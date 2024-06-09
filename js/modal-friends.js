import friendsList from "./consumo-publicaciones.js"

const amigos = document.querySelector(".friendsList")

async function dataJSONFriends() {
    const response = await fetch("../js/utils/db-publicaciones.json");
    const { posts } = await response.json();
    const listFriends = friendsList(posts, amigos)
    console.log(listFriends);
}
dataJSONFriends()

const modalFriends = document.getElementById("modal-friends")
const btnFriends = document.getElementById("friends")

btnFriends.addEventListener("click",()=>{
    modalFriends.classList.toggle("hidden-friends")
})
