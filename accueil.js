function Filtre(categorie) {
  const divs = document.querySelectorAll('.item');
  
  divs.forEach(div => {
    if (categorie === 'all') {
      div.style.display = 'flex';
    } else if (div.classList.contains(categorie)) {
      div.style.display = 'flex';
    } else {
      div.style.display = 'none';
    }
  });
}

document.getElementById('formulaireReservation').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  var nom = document.getElementById('nom').value;
  var date = document.getElementById('date').value;
  var heure = document.getElementById('heure').value;
  var email = document.getElementById('email').value;
  var lieu = document.getElementById('lieu').value;

  var confirmationMessage = "La réservation pour " + nom + " le " + date + " à " + heure + " dans notre somptueux quartier de " + lieu + " a bien été accéptée.";

  alert(confirmationMessage); // Affiche une boîte de dialogue avec le message de confirmation
});