import { modalValidaciones } from "../components/modal-validaciones.js";

const loginForm = document.getElementById('login-form')
const modalValidations = document.getElementById('movalValidations')
var username = document.getElementById('username');
var password = document.getElementById('password');
var remember = document.getElementById('remember');

const usersLocal = JSON.parse(localStorage.getItem('users'))
const userLocalRemember = JSON.parse(localStorage.getItem('UserRemember'))

window.addEventListener('DOMContentLoaded', () => {
    if (userLocalRemember) {
        username.value = userLocalRemember.usernameValue
        password.value = userLocalRemember.passwordValue
    }
})

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameValue = username.value
    const passwordValue = password.value

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(usernameValue)) {
        return modalValidaciones(modalValidations, 'Por favor, introduce un correo electrónico válido y una contraseña.')
    }

    const userFound = usersLocal.find(user => usernameValue === user.email && passwordValue === user.password)

    if (!userFound) {
        return modalValidaciones(modalValidations, 'Usuario o contraseña inválido')
    }

    modalValidaciones(modalValidations, 'Bienvenido')
    const rememberUser = {
        usernameValue,
        passwordValue
    }

    if (remember.checked) {
        localStorage.setItem("UserRemember", JSON.stringify(rememberUser))
    }
    setTimeout(() => {
        window.location.href = 'inicio.html'
    }, 2000);


});
