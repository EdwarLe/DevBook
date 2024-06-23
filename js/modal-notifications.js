const modalNotifications = document.getElementById("modal-notifications")
const btnNotifications = document.getElementById("notifications")
const closeNotifications = document.getElementById("close-notifications")

btnNotifications.addEventListener("click", () => {
    modalNotifications.classList.toggle("hidden-notifications")
})

closeNotifications.addEventListener("click", () => {
    modalNotifications.classList.add("hidden-notifications")
})
