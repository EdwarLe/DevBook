const notificaciones = document.getElementById("notificaciones");

async function dataJSON() {
    const response = await fetch("../js/utils/db-notificaciones.json");
    const { notifications } = await response.json();
    notifications.forEach(notificacion => {
        const contenedorNotificacion = document.createElement("div");

        contenedorNotificacion.innerHTML = `
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
        notificaciones.appendChild(contenedorNotificacion)
    });

}

dataJSON().then((res) => console.log(res));