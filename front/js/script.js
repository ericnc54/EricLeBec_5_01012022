// Requête de l'API

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())

  .then((data) => {
    displayCanapes(data);
  });

// Parcourir les données qu'on reçoit de l'API et on affiche les canapés dans l'HTML
function displayCanapes(donnees) {
  console.log(donnees);

  for (canape of donnees) {
    const identifiant = canape._id;
    const image = canape.imageUrl;
    const textAlt = canape.altTxt;
    const nom = canape.name;
    const description = canape.description;

    document.getElementById(
      "items"
    ).innerHTML += `<a href="./product.html?id=${identifiant}">
      <article>
        <img src="${image}" alt="${textAlt}">
        <h3 class="productName">${nom}</h3>
        <p class="productDescription">${description}</p>
      </article>
    </a>`;
  }
}
