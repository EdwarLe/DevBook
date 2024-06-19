import notificationsList from "./consumo-notificaciones.js"

const notificaciones = document.querySelector(".notificationsList")

async function dataJSONNotifications() {
    const response = await fetch("../js/utils/db-publicaciones.json");
    const { posts } = await response.json();
    const listNotifications = notificationsList(posts, notificaciones)
}
dataJSONNotifications()

const modalNotifications = document.getElementById("modal-notifications")
const btnNotifications = document.getElementById("notifications")

btnNotifications.addEventListener("click", () => {
    modalNotifications.classList.toggle("hidden-notifications")
})