/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(
  ".form__recherche_artefact"
);
const localisation_epoque = document.querySelector(".localisation_epoque");
const voyage_en_cours = document.querySelector(".voyage_en_cours");

const epoques = {
  romaine: "Romaine",
  medievale: "Médievale",
  jurassique: "Jurassique",
};

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

// Execution
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});

const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
let nomEpoqueActuelle;

creerLesChoixEpoque(epoques);

// Fonction appelée plus haut quand le formulaire de voyage temporel est soumis
// et qu'une époque de destination du voyage temporel a été choisi
function quandEpoqueChoisie(nomEpoque) {
  nomEpoqueActuelle = nomEpoque;
  // Utilisation de votre fonction voyagerTemps
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
}

function voyagerTemps(destination, callback) {
  setTimeout(1000, 3000);
  callback(voyagerTemps);
  console.log("Execution de code quand le voyage est terminé.");
}

let nomEpoque;

function afficher_loader() {
  voyage_en_cours.style.display = "none";
}

function voyagerTemps() {}

//récupération de l'élément localisation époque et voyage en cours
localisation_epoque.style.display = "none";
voyage_en_cours.style.display = "block";

// quand le voyage est terminé
localisation_epoque.style.display = "block";
voyage_en_cours.style.display = "none";

function collecterArtefact(nomArtefact, callback) {
  // Simuler un délai aléatoire
  setTimeout(() => {
    // Générer une chance aléatoire d'obtenir un artefact
    const chance = Math.floor(Math.random() * 100); // Génère un nombre entre 0 et 99

    if (chance >= 50) {
      // Si la chance est supérieure ou égale à 50, un artefact est collecté
      callback(true, nomArtefact); // On passe true et le nom de l'artefact
    } else {
      // Sinon, l'artefact n'est pas collecté
      callback(false, nomArtefact); // On passe false et le nom de l'artefact
    }
  }, Math.floor(Math.random() * 100)); // Délai entre 0 et 99 ms
}

// Appel de la fonction avec un exemple de nom d'artefact et une fonction de rappel
collecterArtefact("Epée magique", function(artefactCollecte, nomArtefact) {
  if (artefactCollecte) {
    console.log(`${nomArtefact} collecté !`);
  } else {
    console.log(`${nomArtefact} non trouvé.`);
  }
});
