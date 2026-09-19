/* Compartilhamento: confirmar a cópia apenas quando ela terminar. */
document.querySelectorAll('.copy-link').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = button.parentElement.querySelector('.copy-status');
    const url = button.dataset.url;
    status.textContent = '';
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error('Cópia indisponível');
      }
      await navigator.clipboard.writeText(url);
      status.textContent = 'Link copiado.';
    } catch {
      status.textContent = 'Não foi possível copiar automaticamente. Copie este endereço: ' + url;
    }
  });
});
