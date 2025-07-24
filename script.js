const products = [
  {
    name: "Batom Matte Rosa",
    description: "Cor intensa e duração prolongada.",
    price: "R$ 29,90",
    image: "https://via.placeholder.com/250x200?text=Batom+Rosa"
  },
  {
    name: "Base Líquida Natural",
    description: "Cobertura média com acabamento natural.",
    price: "R$ 49,90",
    image: "https://via.placeholder.com/250x200?text=Base+Líquida"
  },
  {
    name: "Máscara para Cílios",
    description: "Volume e definição sem borrar.",
    price: "R$ 34,90",
    image: "https://via.placeholder.com/250x200?text=Máscara+Cílios"
  },
  {
    name: "Demaquilante Suave",
    description: "Remove maquiagem sem agredir a pele.",
    price: "R$ 39,90",
    image: "https://via.placeholder.com/250x200?text=Demaquilante"
  }
];

const container = document.getElementById("product-list");

products.forEach(p => {
  const el = document.createElement("div");
  el.className = "product";
  el.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h2>${p.name}</h2>
    <p>${p.description}</p>
    <p><strong>${p.price}</strong></p>
  `;
  container.appendChild(el);
});
