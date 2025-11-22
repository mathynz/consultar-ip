const dataIp = document.getElementById('dataIp')
const buttonCopy = document.getElementById('copyDataIp')

function copyContent() {
    const elemento = document.getElementById('dataIp');
    if (!elemento) return; // se não existir, não faz nada

    const texto = elemento.textContent || elemento.innerText;

    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Conteúdo copiado!');
            buttonCopy.style.backgroundColor = "whitesmoke"
            buttonCopy.innerHTML = '<i class="fa-solid fa-copy"></i> Copiado!'
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}

buttonCopy.addEventListener('click', copyContent)