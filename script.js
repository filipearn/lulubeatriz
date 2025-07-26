const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

async function fetchProducts() {
  const response = await fetch("produtos.json");
  const produtos = await response.json();
  return produtos;
}

function renderProducts(produtos) {
  productList.innerHTML = "";
  produtos.forEach((produto) => {
    const card = document.createElement("div");
    const isEsgotado = produto.quantidade === 0;
    card.className = "card" + (isEsgotado ? " esgotado" : "");

    card.innerHTML = `
      ${isEsgotado ? '<div class="esgotado-banner">ESGOTADO</div>' : ""}
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <h2>${produto.nome}</h2>
      <p>${produto.descricao}</p>
      <p><strong>Disponibilidade:</strong> ${produto.quantidade}</p>
      <div class="precos">
        <del>R$ ${produto.preco_original}</del>
        <strong>R$ ${produto.preco_desconto}</strong>
      </div>
      ${
        !isEsgotado
          ? `<a class="whatsapp" target="_blank" href="https://wa.me/5531986483015?text=Olá,%20gostaria%20de%20comprar:%20${encodeURIComponent(
              produto.nome
            )}">Comprar agora</a>`
          : ""
      }
    `;

    productList.appendChild(card);
  });
}

searchInput.addEventListener("input", async (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const produtos = await fetchProducts();
  const filtrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(searchTerm)
  );
  renderProducts(filtrados);
});

window.addEventListener("DOMContentLoaded", async () => {
  const produtos = await fetchProducts();
  renderProducts(produtos);
});
