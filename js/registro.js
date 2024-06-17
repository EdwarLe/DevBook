import { modalValidaciones } from "../components/modal-validaciones.js";

const modalValidations = document.getElementById("movalValidations")

const registerFormPart1 = document.getElementById('register-form-part1')
const emailInputRegister = document.getElementById("email")

const registerFormPart2 = document.getElementById("register-form-part2")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const contraseña = document.getElementById("contraseña")
const country = document.getElementById("country")
const phone = document.getElementById("phone")
const gender = document.getElementById("gender")
const birthday = document.getElementById("birthday")
const role = document.getElementById("role")
const stack = document.getElementById("stack")


registerFormPart1.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailInputRegister.value.includes("@")) {
        return modalValidaciones(modalValidations, "Tipo de correo electrónico inválido")
    }

    modalValidations.style.right = "-100%"

    document.getElementById('register-form-part1').style.display = 'none';
    document.getElementById('register-form-part2').style.display = 'flex';

    // registerFormPart1.reset()
});

let arrayUsers = []
const usersLocal = JSON.parse(localStorage.getItem('users'))

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
    if (contraseña.value.length < 8 || contraseña.value.length > 16) {
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
        "contraseña": contraseña.value,
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
    console.log(newUser)

    modalValidations.style.right = '-100%'

    window.location.href = 'inicio.html'

    registerFormPart2.reset()

})



