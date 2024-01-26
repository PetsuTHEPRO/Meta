function copiarTransrencia() {
    const textoCopiado = "peterson.machado064@gmail.com";
    
    // Cria um elemento textarea e define seu valor
    const textarea = document.createElement('textarea');
    textarea.value = textoCopiado;

    // Adiciona o textarea ao corpo da página para poder selecionar e copiar o texto
    document.body.appendChild(textarea);

    // Seleciona o texto no textarea
    textarea.select();

    try {
        // Tenta executar o comando de cópia (método mais antigo)
        document.execCommand('copy');
        alert('Agora é só ir no banco e colar! $$$');
    } catch (err) {
        // Se o comando execCommand não for suportado, tenta usar a API mais recente
        if (document.queryCommandSupported('copy')) {
            document.execCommand('copy');
            alert('Agora é só ir no banco e colar! $$$');
        } else {
            console.error('A cópia para a área de transferência não é suportada neste navegador.');
        }
    }

    // Remove o textarea após a cópia
    document.body.removeChild(textarea);
}