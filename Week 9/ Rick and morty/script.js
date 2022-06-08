const episodesContainer = document.querySelector(".epContainer");
const charactersContainer = document.querySelector(".charContainer");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    createCards(data.results);
    console.log(data);
  });

function createCards(charactersArray) {
  charactersArray.forEach((character) => {
    charactersContainer.innerHTML =
      charactersContainer.innerHTML +
      `<div id="card">
            <h2>${character.name}</h2>
            <h4 class="epText">View episodes list</h4>
            <img src="${character.image}"/>
        </div>`;
  });
}

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    showEp(data.results);
    console.log(data);
  });

const showEp = function showEp(epArray) {
  epArray.forEach((episode) => {
    episodesContainer.innerHTML =
      episodesContainer.innerHTML +
      `<h3 class='epCard'>${episode.episode}</h3>`;
  });
};
