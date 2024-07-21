// index.js
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImageContainer = document.querySelector("#dog-image-container");

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "dog image";
        dogImageContainer.appendChild(img);
      });
    })
    .catch(error => console.log("Error fetching dog images:", error));

    
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.querySelector("#dog-breeds");

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
        });
    })
    .catch(error => console.log("Error fetching dog breeds:", error));

    breedList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change color as desired
    }
    });

    // Add this to index.js after Challenge 3
    const filterDropdown = document.querySelector("#breed-dropdown");

    filterDropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value.toLowerCase();
    const breedItems = breedList.getElementsByTagName("li");

    Array.from(breedItems).forEach(item => {
        const breedName = item.textContent.toLowerCase();
        if (breedName.startsWith(selectedLetter)) {
        item.style.display = "block"; // Show breed item
        } else {
        item.style.display = "none"; // Hide breed item
        }
        });
    });
});
