const notificaciones = document.querySelector(".notifications")

async function dataJSONNotifications() {
    const response = await fetch("../js/utils/db-publicaciones.json");
    const { posts } = await response.json();
    const listNotifications = notificationsList(posts, notificaciones)
    console.log(listNotifications);
}
dataJSONNotifications()

const modalNotifications = document.getElementById("modal-notifications")
const btnNotifications = document.getElementById("notifications")

btnNotifications.addEventListener("click",()=>{
    modalNotifications.classList.toggle("hidden-notifications")
})