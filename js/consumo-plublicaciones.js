

const contenedorPrincipal = document.getElementById('contenedorPrincipal')



const dataJson =  async () => {
    const respuesta = await fetch('../js/utils/db-publicaciones.json')
    const { posts } = await respuesta.json()
    
    
    const post = document.createElement('div')
    post.innerHTML =  `<div>${posts[0].user.name}</div>`
}

dataJson().then(data => console.log(data))



