const registerFormPart1 = document.getElementById("register-form-part1")
const emailInputRegister = document.getElementById("email")


const validationsForm1 = (e) => {
    e.preventDefault()
    if (!emailInputRegister.value.includes("@")) {
        console.log("No hay correo")
    }
}

registerFormPart1.addEventListener("click", validationsForm1)