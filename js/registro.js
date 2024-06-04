    document.getElementById('register-form-part1').addEventListener('submit', function(event) {
    event.preventDefault();

    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert('Registro exitoso');
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor, completa todos los campos');
    }


    document.getElementById('next-button').addEventListener('click', function(event) {
        document.getElementById('register-form-part1').style.display = 'none';
        document.getElementById('register-form-part2').style.background = 'red';
    }); 
});
