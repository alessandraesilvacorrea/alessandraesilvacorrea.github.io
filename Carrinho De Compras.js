document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os botões de aumento e adiciona um evento de clique
  var increaseButtons = document.querySelectorAll('.add');
  increaseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var quantityElement = button.parentNode.querySelector('span');
      var currentQuantity = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = currentQuantity + 1;
      updateTotal();
    });
  });

  // Seleciona todos os botões de diminuição e adiciona um evento de clique
  var decreaseButtons = document.querySelectorAll('.remove');
  decreaseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var quantityElement = button.parentNode.querySelector('span');
      var currentQuantity = parseInt(quantityElement.textContent, 10);
      if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
      } else {
        // Se a quantidade for 0, você pode remover o item
        var row = button.closest('tr');s
        row.parentNode.removeChild(row);
      }
      updateTotal();
    });
  });

  // Seleciona todos os botões de remoção e adiciona um evento de clique
  var removeButtons = document.querySelectorAll('.delete');
  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var row = button.closest('tr');
      row.parentNode.removeChild(row);
      updateTotal();
    });
  });

// Função para atualizar o total da compra
function updateTotal() {
  var totalElements = document.querySelectorAll('.content table tbody tr td:nth-child()');
  var total = 0;
  totalElements.forEach(function(element) {
    total += parseFloat(element.textContent.replace('R$ ', ''));
  });

  // Atualiza o total na parte inferior da tabela
  var totalFooter = document.querySelector('.box footer span:nth-child()'); // Ajuste aqui
  totalFooter.textContent = 'R$ ' + total.toFixed(2);
}
});
