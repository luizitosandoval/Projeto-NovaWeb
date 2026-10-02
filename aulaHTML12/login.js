document.addEventListener('DOMContentLoaded', () => {
    const formularioLogin = document.getElementById('formularioLogin');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const erroEmail = document.getElementById('erroEmail');
    const erroSenha = document.getElementById('erroSenha');

    const validarEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    formularioLogin.addEventListener('submit', (event) => {
        let isValid = true;

        // Resetar mensagens de erro
        erroEmail.textContent = '';
        erroSenha.textContent = '';

        // Validação de E-mail
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            erroEmail.textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!validarEmail(emailValue)) {
            erroEmail.textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        }

        // Validação de Senha
        const senhaValue = senhaInput.value;
        if (!senhaValue) {
            erroSenha.textContent = 'A senha é obrigatória.';
            isValid = false;
        } else if (senhaValue.length < 6) {
            erroSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Previne o envio real para este protótipo
            alert('Login realizado com sucesso! (Simulação)');
            console.log('Dados de Login:', { email: emailValue, senha: senhaValue });
        }
    });
});