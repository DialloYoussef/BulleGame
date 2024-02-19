const counterDisplay = document.querySelector("h3");
let counter = 0;
let echec = 0;
let bubbleInterval;

const bubleMaker = () => {
  const buble = document.createElement("span");
  document.body.appendChild(buble);
  buble.classList.add("buble");

  const size = Math.random() * 200 + 100 + "px";
  buble.style.height = size;
  buble.style.width = size;

  buble.style.top = Math.random() * 100 + 50 + "%";
  buble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  buble.style.setProperty("--left", Math.random() * 100 + plusMinus + "%");

  buble.addEventListener("click", () => {
    counterDisplay.textContent = counter++;
    buble.remove();
  });

  setTimeout(() => {
    echec++;
    buble.remove();

    // Vérifier si le joueur a échoué à éclater 10 bulles
    if (echec >= 10) {
      clearInterval(bubbleInterval);
      const restartGame = confirm(
          "Jeu terminé! Votre score : " +
          `\n Bulles non éclatées : ${echec}` +
          counter +
          "\nVoulez-vous rejouer?"
      );
      if (restartGame) {
        // Réinitialiser les compteurs
        counter = 0;
        echec = 0;
        // Relancer la génération automatique de bulles
        bubbleInterval = setInterval(bubleMaker, 1000);
      }
    }
  }, 8000);
};

// Ajout d'un délai initial avant le début de la génération automatique
setTimeout(() => {
  bubbleInterval = setInterval(bubleMaker, 1000);
}, 2000); // Démarrer après 2 secondes (ajustable selon vos besoins)

/*
  ------------------------------ Améliorations possibles -----------------------------
  -Compter et afficher le nombre de bulles non éclatées
  -Arrêter la génération automatique de bulles si le nombre de bulles non éclatées atteint 10 en affichant son score
*/
