function sendToWhatsApp() {
    // Récupérer les valeurs des champs du formulaire
    const color = document.getElementById("color").value;
    const passion = document.getElementById("passion").value;
    const food = document.getElementById("food").value;
    const personality = document.getElementById("personality").value;
    const goal = document.getElementById("goal").value;

    // Créer le message WhatsApp pré-rempli
    const message = `Bonjour, voici mes réponses au formulaire :\n
    Couleur préférée : ${color}\n
    Passion : ${passion}\n
    Plat préféré : ${food}\n
    Genre de personne : ${personality}\n
    Objectif dans la vie : ${goal}`;

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);

    // Remplacer par ton numéro WhatsApp sans le "+"
    const phoneNumber = "8199968999";  // Ton numéro WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Ouvrir le lien WhatsApp
    window.open(url, "_blank");
}
