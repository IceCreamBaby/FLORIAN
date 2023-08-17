// Hol dir den Button und das Textelement
const giftButton = document.getElementById('giftButton');
const giftDescription = document.getElementById('giftDescription');

// Füge einen Event-Listener zum Button hinzu
giftButton.addEventListener('click', function() {
    // Zeige den Text, wenn auf den Button geklickt wird
    giftDescription.style.display = 'block';
});
