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
//----------------------------------6.1-------------------------------------------------------

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
// ----------------------------------------------------------------------------------------------



//--------------------------------------------6.2-------------------------------------------------
// Add an event listener on the document <body>, listening for the keypress event.

//     When the spacebar is hit randomly change the background color of the whole page
//     Log when the spacebar is used the same way you used for the generated squares.
//     When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
//     When the s key is pressed the squares get deleted (erases the generated squares).

//fonction random couleur de l'exercice 1 de la partie DOM Create
// function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color = color + letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//detecter la space bar keyCode : 32

document.addEventListener("keypress",function(e){
    if (e.keyCode == 32) {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
              color = color + letters[Math.floor(Math.random() * 16)];
            }
            document.body.style.backgroundColor = color;
        
    }
});