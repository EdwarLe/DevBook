const notificaciones = document.querySelector(".notificaciones")
const notificacionesSelect = document.querySelector(".notificacionesSelect")



async function dataJSON() {
    const response = await fetch("../js/utils/db-notificaciones.json");
    const { notifications } = await response.json();
    notificationsList ( notifications,notificaciones)
    notificationsList ( notifications,notificacionesSelect)
}

function notificationsList(posts, containerNotifications){
    posts.forEach(notificacion=>{
        const contenedorNotificatios = document.createElement("div");
        contenedorNotificatios.innerHTML = `
        <div class="notificacion"> 
            <div class="titulo">${notificacion.content.username}</div>
                <div class="contenido">
                    ${notificacion.type === "comment" ? 
                        `<p>Commented on your post: "${notificacion.content.commentText}"</p>` :
                        `<p>Liked your post: "${notificacion.content.postTitle}"</p>`}
                    <span class="timestamp">${new Date(notificacion.content.timestamp).toLocaleString()}</span>
                </div>
            </div>
        </div>  
        `
        containerNotifications.appendChild(contenedorNotificatios);
    })
}

dataJSON().then((res) => console.log(res));

export default notificationsList