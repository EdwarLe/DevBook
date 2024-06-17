let button = document.getElementById("next-button")

document.getElementById('register-form-part1').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailInputRegister.value.includes("@")) {

        window.location.href = 'inicio.html';
    }

});

button.addEventListener('click', function (event) {

    document.getElementById('register-form-part1').style.display = 'none';
    document.getElementById('register-form-part2').style.display = 'flex';

});

