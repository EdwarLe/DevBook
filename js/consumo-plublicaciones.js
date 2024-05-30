const publicaciones = document.getElementById("publicaciones");

async function dataJSON() {
    const response = await fetch("../js/utils/db-publicaciones.json");
    const { posts } = await response.json();
    posts.forEach(post => {
        const contenedorPost = document.createElement("div");
        const elapsedTime = calculateElapsedTime(post.timestamp);
        let mediaContent = '';

            if (post.content.media && post.content.media.length > 0) {
                const media = post.content.media[0];
                if (media.type === "image") {
                    mediaContent = `<img class="content" src="${media.url}" alt="media">`;
                } else if (media.type === "video") {
                    mediaContent = `
                        <video class="content" controls>
                            <source src="${media.url}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>`;
                }
            }
        contenedorPost.innerHTML = `
        <div class="tarjeta">
            <div class="encabezado">
                <img class="foto" src="${post.user.profile_picture}" alt="${post.user.name}"> 
                <section>
                    <p id="usuario">${post.user.name}</p>
                    <p id="fecha">${elapsedTime}</p>
                </section>
            </div>
            <p class="text">${post.content.text}</p>
            ${mediaContent}
        </div>`;
        

        publicaciones.appendChild(contenedorPost);
    });
}

dataJSON().then((res) => console.log(res));

function calculateElapsedTime(timestamp) {
    const initialDate = new Date(timestamp);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate - initialDate;

    const seconds = Math.floor(elapsedMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    let elapsedTimeString = '';
    if (years > 0) {
        elapsedTimeString = `${years}a`;
    } else if (months > 0) {
        elapsedTimeString = `${months}m`;
    } else if (days > 0) {
        elapsedTimeString = `${days}d`;
    } else if (hours > 0) {
        elapsedTimeString = `${hours}h`;
    } else if (minutes > 0) {
        elapsedTimeString = `${minutes}min`;
    } else {
        elapsedTimeString = 'Now';
    }

    return elapsedTimeString;
}
