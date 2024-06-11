const publicaciones = document.getElementById("publicaciones");
const listaAmigos = document.querySelector(".lista-amigos")

async function dataJSON() {
    const response = await fetch("../js/utils/db-publicaciones.json");
    const { posts } = await response.json();

    const dataToString = JSON.stringify(posts)


    const postsLocalStorage = JSON.parse(localStorage.getItem('posts'))


    if (postsLocalStorage.length <= 10) {
        localStorage.setItem('posts', dataToString)
    }
    postsLocalStorage.forEach(post => {
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
            <div class="content">
                <img id="media" class="media">${mediaContent}
            </div>
            <div class="interactions">
                <section class="icons">
                    <i class='bx bxs-heart'></i>
                    <i class='bx bxs-like '></i>
                    <i class='bx bxs-donate-heart'></i>
                </section>
                <hr>
                <div class="post-actions">
                    <section class="Like">
                        <i class='bx bx-like'></i>
                        <p>Like</p>
                    </section>
                    <section class="Comment">
                        <i class='bx bx-comment'></i>
                        <p>Comment</p>
                    </section>
                    <section class="Share">
                        <i class='bx bx-share-alt'></i>
                        <p>Share</p>
                    </section>
                </div> 
                <div class="comments-section" style="display: none;">
                    <h3>Comments</h3>
                    <div class="comments-list">
                        <div class="new-comment">
                            <input type="text" placeholder="¿Qué estás pensando?">
                            <button>Send</button>
                        </div>
                        ${post.comments.map(comment => `
                        <div class="comment">
                            <p><strong>${comment.user.name}</strong>: ${comment.text}</p>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>    
        </div>`;


        publicaciones.appendChild(contenedorPost);

        contenedorPost.querySelector('.Comment').addEventListener('click', function () {
            const commentsSection = contenedorPost.querySelector('.comments-section');
            if (commentsSection.style.display === 'none') {
                commentsSection.style.display = 'block';
            } else {
                commentsSection.style.display = 'none';
            }
        });
    });

    posts.forEach(amigo => {
        const contenedorAmigos = document.createElement("div");
        contenedorAmigos.innerHTML = `
        <div class="amigo">
            <img src="${amigo.user.profile_picture}" alt="${amigo.user.name}">
            <p>${amigo.user.name}</p>
        </div>`
        listaAmigos.appendChild(contenedorAmigos);
    })
}

dataJSON();

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
