function ajouterTache(){
    //Création d'une nouvelle tache
    let nouvelleTache= document.createElement('li');
    //Customization des éléments de la liste de taches
    nouvelleTache.style.marginTop = '5px';
    nouvelleTache.style.width = '90%';
    nouvelleTache.style.marginLeft = '10px';
    nouvelleTache.innerText = document.getElementById('nouvelleTache').value;
    //Réinitialisation de l'input pour une nouvelle tache
    document.getElementById('nouvelleTache').value = "";
    //Ajout de la tache créée
    listeTaches.appendChild(nouvelleTache);
    $(listeTaches).listview('refresh');
}

function reinitialiserListetaches(){
    listeTaches.innerText = "";
}

