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
const rechercher_artefact = document.querySelector(".recherche_en_cours");
const recuperer_artefact = document.querySelector(".recherche_en_cours");

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
  //récupération de l'élément localisation époque et voyage en cours
  localisation_epoque.style.display = "none";
  voyage_en_cours.style.display = "block";
}

function afficherNomEpoque(nomEpoque) {
  
  //quand le voyage est terminé
  localisation_epoque.style.display = "block";
  voyage_en_cours.style.display = "none";
}

function voyagerTemps(destination, callback) {
  console.log("Execution de code pour le voyage.");
  setTimeout(function() {
    callback(destination)
    console.log("Execution de code quand le voyage est terminé.");
  }, generationNombreAleatoireEntre(1000, 3000));
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
  rechercher_artefact.style.display = "none";
  recuperer_artefact.style.display = "block";

  rechercher_artefact.style.display = "block";
  recuperer_artefact.style.display = "none";
}


let nomEpoque;

function afficher_loader() {
  voyage_en_cours.style.display = "none";
}

function collecterArtefact(nomArtefact, callback) {
  // Simuler un délai aléatoire
  setTimeout(() => {
    // Générer une chance aléatoire d'obtenir un artefact
    const chance = Math.floor(Math.random() * 100); // Génère un nombre entre 0 et 99
    callback(chance >= 50, nomArtefact);
  }, generationNombreAleatoireEntre(1000, 3000)); // Délai
}

// Appel de la fonction avec un exemple de nom d'artefact et une fonction de rappel
collecterArtefact("Epée magique", function (artefactCollecte, nomArtefact) {
  if (artefactCollecte) {
    console.log(`${nomArtefact} collecté !`);
  } else {
    console.log(`${nomArtefact} non trouvé.`);
  }
});
