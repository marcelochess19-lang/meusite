
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o reload da página
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if (nome && telefone && mensagem) {
      window.location.hash = '#openModal';
      form.reset();
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  });
});
