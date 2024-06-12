const notificaciones = document.querySelector(".notificaciones")
const notificacionesSelect = document.querySelector(".notificacionesSelect")

async function dataJSON() {
    const response = await fetch("../js/utils/db-notificaciones.json");
    const { notifications } = await response.json();
    notificationsList ( notifications,notificaciones)
    notificationsList ( notifications,notificacionesSelect)
}

function notificationsList(notifications, containerNotifications){
    notifications.forEach(notification=>{
        const contenedorNotificatios = document.createElement("div");
        contenedorNotificatios.innerHTML = `
        <div class="notificacion"> 
            <div class="titulo">${notification.content.username}</div>
                <div class="contenido">
                    ${notification.type === "comment" ? 
                        `<p>Commented on your post: "${notification.content.commentText}"</p>` :
                        `<p>Liked your post: "${notification.content.postTitle}"</p>`}
                    <span class="timestamp">${new Date(notification.content.timestamp).toLocaleString()}</span>
                </div>
            </div>
        </div>  
        `
        containerNotifications.appendChild(contenedorNotificatios);
    })
}


export default notificationsList
dataJSON();