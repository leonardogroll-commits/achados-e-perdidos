document.addEventListener('DOMContentLoaded', () => {
  const itemForm = document.getElementById('item-form');
  const itemsGrid = document.getElementById('items-grid');

  // Array simples para armazenar os itens em memoria
  let items = [
    {
      title: 'Garrafa Inox Prata',
      category: 'Outros',
      location: 'Banco do Pátio',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300'
    }
  ];

  // Função para desenhar os cards na tela
  function renderItems() {
    itemsGrid.innerHTML = '';

    if (items.length === 0) {
      itemsGrid.innerHTML = '<p>Nenhum item cadastrado no momento.</p>';
      return;
    }

    items.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';

      const imgUrl = item.image || 'https://via.placeholder.com/300x140?text=Sem+Foto';

      card.innerHTML = `
        <img src="${imgUrl}" alt="${item.title}">
        <div class="card-body">
          <div class="card-title">${item.title}</div>
          <div class="card-info"><strong>Local:</strong> ${item.location}</div>
          <span class="tag">${item.category}</span>
        </div>
      `;

      itemsGrid.appendChild(card);
    });
  }

  // Evento de envio do formulario
  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const image = document.getElementById('image-url').value;

    // Adiciona o novo item
    items.unshift({ title, category, location, image });

    // Limpa o formulario e atualiza a tela
    itemForm.reset();
    renderItems();
  });

  // Renderizacao inicial
  renderItems();
});
