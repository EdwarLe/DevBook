import { modalValidaciones } from "../components/modal-validaciones.js";

const modalValidations = document.getElementById("movalValidations")
const emailInputRegister = document.getElementById("email")

console.log(modalValidations)

document.getElementById('register-form-part1').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailInputRegister.value.includes("@")) {
        return modalValidaciones(modalValidations, "Tipo de correo electrónico inválido")
    }

    modalValidations.style.right = "-100%"

    document.getElementById('register-form-part1').style.display = 'none';
    document.getElementById('register-form-part2').style.display = 'flex';
});



