// Wait for the DOM to finish loading before rendering the toys
document.addEventListener("DOMContentLoaded", () => {

    // Fetch all the toys from the API
    fetch("http://localhost:3000/toys")
      .then(response => response.json())
      .then(toys => {
  
        // For each toy, render it in the DOM as a card
        toys.forEach(toy => renderToy(toy));
      });
  });
  
  // Render a single toy as a card in the DOM
  function renderToy(toy) {
    // Create a new div element with the "card" class
    const card = document.createElement("div");
    card.className = "card";
  
    // Create a new h2 element with the toy's name
    const name = document.createElement("h2");
    name.textContent = toy.name;
  
    // Create a new img element with the toy's image
    const image = document.createElement("img");
    image.src = toy.image;
    image.className = "toy-avatar";
  
    // Create a new p element with the toy's likes
    const likes = document.createElement("p");
    likes.textContent = `${toy.likes} likes`;
  
    // Create a new button element with the toy's ID as the ID attribute
    const button = document.createElement("button");
    button.className = "like-btn";
    button.id = toy.id;
    button.textContent = "Like ❤️";
  
    // Append the name, image, likes, and button to the card
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(likes);
    card.appendChild(button);
  
    // Append the card to the toy collection in the DOM
    const collection = document.getElementById("toy-collection");
    collection.appendChild(card);
  }
  