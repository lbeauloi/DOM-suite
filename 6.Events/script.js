const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
//----------------------------------6.1-------------------------------------

// créer une nouvelle div + ajouter une classe + attacher la div a la div parent (displayedsquare-wrapper)
// let newDiv = document.createElement("div");
// newDiv.classList.add("displayedsquare");
// document.displayedsquare-wrapper.appendChild(newDiv);
//ok très bien, mnt go foutre ça dans une fonction et ensuite dans un eventlistener pour quand l'utilisateur clique

//pour le vert
let pourVert = document.querySelector(".actionsquare.green");
//pour le violet
let pourViolet = document.querySelector(".actionsquare.violet");
// pour le orange
let pourOrange = document.querySelector(".actionsquare.orange");

function carreVert() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  document.querySelector(".displayedsquare-wrapper").appendChild(newDiv);
  newDiv.style.backgroundColor = "#00ff00"; //vert
  // creation de la liste
  let newLi = document.createElement("li");
  // pour afficher le texte + le temps (donné dans l'ennoncé, j'ai pas sorti ça tout seul)
  newLi.textContent =
    Number((Date.now() - _initTime) / 1000).toFixed(2) +
    "s création d'un carré vert";
  //ratacher cette liste à l'ul du doc
  document.querySelector("ul").appendChild(newLi);
  // ajout de l'alerte lorsqu'on clique sur le nouveau carré généré
  newDiv.addEventListener("click", function () {
    alert("Carré vert cliqué !");
  });
}

function carreMauve() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  document.querySelector(".displayedsquare-wrapper").appendChild(newDiv);
  newDiv.style.backgroundColor = "#ff00ff"; //violet
  // creation de la liste
  let newLi = document.createElement("li");
  // pour afficher le texte + le temps (donné dans l'ennoncé, j'ai pas sorti ça tout seul)
  newLi.textContent =
    Number((Date.now() - _initTime) / 1000).toFixed(2) +
    "s création d'un carré violet";
  //ratacher cette liste à l'ul du doc
  document.querySelector("ul").appendChild(newLi);
  // ajout de l'alerte lorsqu'on clique sur le nouveau carré généré
  newDiv.addEventListener("click", function () {
    alert("Carré violet cliqué !");
  });
}
function carreOrange() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  document.querySelector(".displayedsquare-wrapper").appendChild(newDiv);
  newDiv.style.backgroundColor = "#ffa500"; //orange
  // creation de la liste
  let newLi = document.createElement("li");
  // pour afficher le texte + le temps (donné dans l'ennoncé, j'ai pas sorti ça tout seul)
  newLi.textContent =
    Number((Date.now() - _initTime) / 1000).toFixed(2) +
    "s création d'un carré orange";
  //ratacher cette liste à l'ul du doc
  document.querySelector("ul").appendChild(newLi);
// ajout de l'alerte lorsqu'on clique sur le nouveau carré généré
  newDiv.addEventListener("click", function () {
    alert("Carré orange cliqué !");
  });
}

pourVert.addEventListener("click", carreVert);
pourViolet.addEventListener("click", carreMauve);
pourOrange.addEventListener("click", carreOrange);

