let nombreInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let mensajeInput = document.getElementById("message")

nombreInput.addEventListener("input",createListener(IsValidname))
emailInput.addEventListener("input",createListener(IsValidEmail))
mensajeInput.addEventListener("input",createListener(IsValidmessage))

function IsValidname(nombreInput) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){0,5}$/.test(nombreInput.trim());
}

function IsValidEmail(emailInput) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
}

function IsValidmessage(mensajeInput) {
    const cuenta = (mensajeInput.trim().match(/\b\w+(['-]?\w+)*\b/g) || []).length
    return cuenta <= 100;
}

function createListener(validator) {
    return function (e) {
        let input = e.target
        let text = input.value
        let valid = validator(text)
        let error = text!=="" && !valid
        let errorMensaje = input.nextElementSibling
        mostrarOcultar(error, errorMensaje, input)
    }

}

function mostrarOcultar(error, errorMessage, input) {
    if (error) {
        errorMessage.textContent = input.getAttribute('data-error-message');
        input.classList.add("invalid");
    } else {
        errorMessage.textContent = "";
        input.classList.remove("invalid");
    }
}