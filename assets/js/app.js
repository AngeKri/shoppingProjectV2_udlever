const productsEl = document.querySelector(".products")


// Anvend fetch til at hente data fra lokal .jsonfil
fetch("./assets/js/watchesJson.json")
    .then(res => res.json())
    .then(watchData => {
        renderArticles(watchData.watches)
    })
    .catch(err => console.log("ERROR ", err, "pog"))

function renderArticles(watches){
    console.log("watches:", watches);
    watches.forEach((product) => {
        console.log("product:", product);
        productsEl.innerHTML += `
        <article class="product">
            <h3 class="product-title">${product.name}</h3>
            <img src="./assets/img/${product.imgUrl}" alt="${product.name}"/>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price},-</p>
            </article>`;
        
        // skab ny knap
        // skab nyt i
        const newButton = document.createElement("button");
        const newI = document.createElement("i");

        // indsæt tekst i <button>
        newButton.textContent = "Tilføj til kurv";

        // Indsæt classes på <i>
        newI.setAttribute("class", "fa-solid");
        newI.classList.add("fa-cart-plus");
        console.log("newI:", newI); 

        // Sæt eventlistener på knap
        newButton.addEventListener("click", () => {
            console.log("Watch bought succesfully !");s
        });

        const currentArticles = productsEl.querySelectorAll("article")
        
        // Sæt <i> ind i <button> og <button> ind i <article>

        currentArticles.forEach(article => {
            newButton.append(newI);
            article.append(newButton);
        });
     });
}




