// Définir les taux de conversion
const tauxCFAtoDirham = 1 / 66; // 1 CFA = 0.01515 Dirham
const tauxDirhamToCFA = 58; // 1 Dirham = 58 CFA

// Sélectionner les éléments HTML
const inputCFA = document.getElementById('cfa');
const inputDirham = document.getElementById('dirham');

// Fonction pour convertir le montant CFA en Dirham
function convertCFAtoDirham() {
    const cfaValue = parseFloat(inputCFA.value);
    if (!isNaN(cfaValue)) {
        const dirhamValue = cfaValue * tauxCFAtoDirham;
        inputDirham.value = dirhamValue.toFixed(2); // Affichage avec 2 décimales
    } else {
        inputDirham.value = '';
    }
}

// Fonction pour convertir le montant Dirham en CFA
function convertDirhamToCFA() {
    const dirhamValue = parseFloat(inputDirham.value);
    if (!isNaN(dirhamValue)) {
        const cfaValue = dirhamValue * tauxDirhamToCFA;
        inputCFA.value = cfaValue.toFixed(2); // Affichage avec 2 décimales
    } else {
        inputCFA.value = '';
    }
}

// Lier les événements "input" aux fonctions de conversion
inputCFA.addEventListener('input', convertCFAtoDirham);
inputDirham.addEventListener('input', convertDirhamToCFA);
