export const modalValidaciones = (modal, textoError) => {
    modal.style.right = '0'
    modal.textContent = textoError
    setTimeout(() => {
        modal.style.right = '-200%'
    }, 5000);
}