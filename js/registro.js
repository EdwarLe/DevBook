document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert('Registro exitoso');
        window.location.href = 'index.html';
    } else {
        alert('Por favor, completa todos los campos');
    }
});
