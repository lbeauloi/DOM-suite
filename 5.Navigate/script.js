// 4.1 Select the last child of the <ol> tag and put it at the beginning of the list
// 4.2 Move the <h2> of the third section in the second one and vice-versa
// 4.3 Delete the last section from the DOM, we don't need it anyways

//----------------4.1----------------
let ol = document.querySelector("ol");
let a = ol.children[4];
let b = ol.children[0];
b.appendChild(a); //si on s'arrete là, l'élément fast and furious sera 2eme et pas 1er
ol.insertBefore(a,b);

//----------------4.2-----------------
let h2Doc = document.querySelectorAll('h2'); //on choppe tous les h2 du doc 

let tempContent = h2Doc[1].textContent; // on met le contenu texte du h2 index 1 (="third section") et on stocke ça dans une variable

h2Doc[1].textContent = h2Doc[2].textContent; //on echange les titre h2 index 1 (third title) avec le h2 index 1 (second title)

h2Doc[2].textContent = tempContent; //on injecte notre tempContent à notre h2 index 2

//----------------4.3------------------

let parent = document.body; //élément parent de l'enfant qu'on veut supp

let enfant = document.querySelector("footer"); // élément qu'on veut supp

parent.removeChild(enfant); // removeChild pour supprimer l'enfant de son parent

