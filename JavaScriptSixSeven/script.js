document.addEventListener('DOMContentLoaded', function () {
    const campoNascimento = document.querySelector('#nascimento');
    const hoje = new Date();

    const dataMax = hoje.toISOString().split('T')[0];
    campoNascimento.setAttribute('max', dataMax);

    const dataMin = new Date();
    dataMin.setFullYear(hoje.getFullYear() - 100);
    campoNascimento.setAttribute('min', dataMin.toISOString().split('T')[0]);

    function validaNascimento() {
        const campo = document.querySelector('#nascimento');
        const dataDigitada = campo.value;

        if (dataDigitada === '') {
            alert('Por favor, informe sua data de nascimento.');
            return false;
        }

        const data = new Date(dataDigitada + 'T00:00:00');

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const dataMinima = new Date();
        dataMinima.setFullYear(dataMinima.getFullYear() - 100);

        if (data > hoje) {
            alert('Mentiroso! Você é um viajante do tempo?');
            return false;
        }

        if (data < dataMinima) {
            alert('Mentiroso! Você é um homem das cavernas?');
            return false;
        }
        return true;
    }

    window.Salvar = function() {
        if (!validaNascimento()) {
            return;
        }
        mensagem();
    }
});