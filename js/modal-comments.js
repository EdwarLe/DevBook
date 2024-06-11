const commentModal = document.querySelector(".commentModal")
const closeComments =document.querySelector(".closeComment")
const openComments= document.querySelector(".openComments")

async function dataJSON() {
    const response = await fetch("../js/utils/db-publicaciones.json");
    const { posts } = await response.json();
    
    posts.forEach(post => {
        const contenedor = document.createElement("div");
        contenedor.innerHTML=`
        <div class="comments-section">
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
        `
        
    commentModal.appendChild(contenedor)
    console.log(contenedor)
    })
    
    openComments.addEventListener("click",()=>{
        commentModal.classList.remove("hiddenComment")
    })
    closeComments.addEventListener("click",()=>{
        commentModal.classList.add("hiddenComment")
    })
}

dataJSON()