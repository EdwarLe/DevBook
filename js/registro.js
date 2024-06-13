let button = document.getElementById("next-button")

document.getElementById('register-form-part1').addEventListener('submit', function (event) {
    event.preventDefault();

    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert('Registro exitoso');
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor, completa todos los campos');
    }

});

button.addEventListener('click', function (event) {

    document.getElementById('register-form-part1').style.display = 'none';
    document.getElementById('register-form-part2').style.display = 'flex';

});

