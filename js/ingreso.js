document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(username) && password !== '') {
        errorMessage.textContent = '';
        alert('Inicio de sesión exitoso');
        localStorage.setItem('username', username);
        window.location.href = 'inicio.html';
    } else {
        errorMessage.textContent = 'Por favor, introduce un correo electrónico válido y una contraseña.';
    }
});
