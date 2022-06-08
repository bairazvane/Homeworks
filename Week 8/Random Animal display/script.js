var imgContainer = document.querySelector(".container");
var requestBtn = document.querySelector(".showBtn");

const renderImage = function () {
  var option = document.querySelector(".selectbtn");
  if (option.value === "cat") {
    getCat();
  } else if (option.value === "dog") {
    getDog();
  } else {
    getFox();
  }
};

let displayContent = function (src) {
  const html = `<figure><img src="${src}" class="image"></figure>`;
  imgContainer.innerHTML = "";
  imgContainer.insertAdjacentHTML("afterbegin", html);
};

let getBreed = function (breed) {
  if (breed === "cat") {
    return fetch("https://api.thecatapi.com/v1/images/search").then(
      (response) => response.json()
    );
  } else if (breed === "dog") {
    return fetch("https://random.dog/woof.json").then((response) =>
      response.json()
    );
  } else if (breed === "fox") {
    return fetch("https://randomfox.ca/floof/").then((response) =>
      response.json()
    );
  }
};

const getCat = function () {
  let displayCatImg = getBreed("cat");
  displayCatImg.then(function (data) {
    displayContent(data.url);
  });

  // fetch('https://aws.random.cat/meow')
  // .then((response) => response.json())
  // .then(function (data){
  //     console.log(data);
  //     const html = `<figure><img src="${data.url}" class="image"></figure>`;
  //     imgContainer.innerHTML = '';
  //     imgContainer.insertAdjacentHTML("afterbegin", html);
  // })
};

const getDog = function () {
  let displayDogImg = getBreed("dog");
  displayDogImg.then(function (data) {
    displayContent(data.url);
  });

  // .then((response) => response.json())
  // .then(function (data){
  //     console.log(data)
  //     const html = `<figure><img src="${data.url}" class="image"></figure>`
  //     imgContainer.innerHTML = '';
  //     imgContainer.insertAdjacentHTML("afterbegin", html)
  // })
};

const getFox = function () {
  let displayFoxImg = getBreed("fox");
  displayFoxImg.then(function (data) {
    displayContent(data.url);
  });

  // fetch('https://randomfox.ca/floof')
  // .then((response) => response.json())
  // .then(function (data){
  //     console.log(data)
  //     const html = `<figure><img src="${data.url}" class="image"></figure>`
  //     imgContainer.insertAdjacentHTML("afterbegin", html)
  // })
};

requestBtn.addEventListener("click", renderImage);
