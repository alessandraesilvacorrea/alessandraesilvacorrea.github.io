document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os botões de aumento e adiciona um evento de clique
  var increaseButtons = document.querySelectorAll('.add');
  increaseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var quantityElement = button.parentNode.querySelector('span');
      var currentQuantity = parseInt(quantityElement.textContent, 10);
      
      if (currentQuantity < 1) { // Verifica se a quantidade atual é menor que 1
        quantityElement.textContent = currentQuantity + 1;
        updateTotal();
      } else {
        alert("Você já atingiu a quantidade máxima (1) para este item. Você só pode comprar uma ficha de cada refeição por dia.");
      }
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
        // Se a quantidade for 1, você pode remover o item
        var row = button.closest('tr');
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
    var totalElements = document.querySelectorAll('.content table tbody tr');
    var subtotal = 0;

    totalElements.forEach(function(row) {
      var price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('R$ ', '').replace(',', '.'));
      var quantity = parseInt(row.querySelector('.qtd span').textContent, 10);
      var total = price * quantity;
      row.querySelector('td:nth-child(4)').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
      subtotal += total;
    });

    var subtotalElement = document.querySelector('.info div span:nth-child(2)');
    subtotalElement.textContent = 'R$ ' + subtotal.toFixed(2).replace('.', ',');

    var totalFooter = document.querySelector('.box footer span:nth-child(2)');
    totalFooter.textContent = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
  }
});
