const buttonDownload = document.getElementById('downloadDataIp');

buttonDownload.addEventListener('click', () => {
    const elemento = document.getElementById('dataIp');
    if (!elemento) return;

    const texto = elemento.textContent || elemento.innerText;
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'dados-ip.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    buttonDownload.style.backgroundColor = "whitesmoke";
    buttonDownload.innerHTML = '<i class="fa-solid fa-copy"></i> Baixado!'
});