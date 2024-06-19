import { modalValidaciones } from "../components/modal-validaciones.js";

const modalValidations = document.getElementById("movalValidations")

const registerFormPart1 = document.getElementById('register-form-part1')
const emailInputRegister = document.getElementById("email")

const registerFormPart2 = document.getElementById("register-form-part2")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const password = document.getElementById("password")
const country = document.getElementById("country")
const phone = document.getElementById("phone")
const gender = document.getElementById("gender")
const birthday = document.getElementById("birthday")
const role = document.getElementById("role")
const stack = document.getElementById("stack")

const usersLocal = JSON.parse(localStorage.getItem('users'))

// Validación del formulario del correo
registerFormPart1.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = emailInputRegister.value

    if (!emailInput.includes("@")) {
        return modalValidaciones(modalValidations, "Tipo de correo electrónico inválido")
    }

    if (usersLocal !== null) {
        const emailFound = usersLocal.find(user => emailInput === user.email)

        if (!emailFound) {
            modalValidations.style.right = "-100%"

            registerFormPart1.style.display = 'none';
            registerFormPart2.style.display = 'flex';
        } else {
            return modalValidaciones(modalValidations, 'Esta cuenta de correo ya existe')

        }

    }


})


// Validación del formulario de registro completo
let arrayUsers = []

if (usersLocal !== null) {
    arrayUsers = usersLocal
}

registerFormPart2.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nombre.value === '' || nombre.value.length < 3) {
        return modalValidaciones(modalValidations, "Nombre de usuario inválido")
    }
    if (apellido.value === '' || apellido.value.length < 3) {
        return modalValidaciones(modalValidations, "Apellido de usuario inválido")
    }
    if (password.value.length < 8 || password.value.length > 16) {
        return modalValidaciones(modalValidations, "La contraseña debe tener mínimo 8 carácteres y máximo 16")
    }
    if (!country.value) {
        return modalValidaciones(modalValidations, "Selecciona un país")
    }
    if (isNaN(phone.value) || phone.value === '' || phone.value.length < 10) {
        return modalValidaciones(modalValidations, "Ingresa un número de teléfono válido")
    }
    if (!gender.value) {
        return modalValidaciones(modalValidations, "Selecciona un género")
    }
    if (!birthday.value) {
        return modalValidaciones(modalValidations, "Ingresa una fecha de nacimiento")
    }
    if (!role.value) {
        return modalValidaciones(modalValidations, "Ingresa el role en el que te desmpeñas")
    }
    if (!stack.value) {
        return modalValidaciones(modalValidations, "Ingresa el lenguaje de programación que manejas")
    }

    const newUser = {
        "email": emailInputRegister.value,
        "nombre": nombre.value,
        "apellido": apellido.value,
        "password": password.value,
        "country": country.value,
        "phone": phone.value,
        "gender": gender.value,
        "birthday": birthday.value,
        "role": role.value,
        "stack": stack.value

    }

    arrayUsers.push(newUser)

    localStorage.setItem('users', JSON.stringify(arrayUsers))

    emailInputRegister.value = '';

    modalValidations.style.right = '-100%'

    window.location.href = 'inicio.html'

    registerFormPart2.reset()

})



