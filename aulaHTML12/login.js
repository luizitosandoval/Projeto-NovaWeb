document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    loginForm.addEventListener('submit', (event) => {
        let isValid = true;

        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // Email Validation
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!validateEmail(emailValue)) {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        }

        // Password Validation
        const passwordValue = passwordInput.value;
        if (!passwordValue) {
            passwordError.textContent = 'A senha é obrigatória.';
            isValid = false;
        } else if (passwordValue.length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent actual submission for this prototype
            alert('Login realizado com sucesso! (Simulação)');
            console.log('Login Data:', { email: emailValue, password: passwordValue });
        }
    });
});