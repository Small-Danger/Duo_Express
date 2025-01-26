// Définir les taux de conversion
const tauxCFAtoDirham = 1 / 65; // 1 CFA = 0.01539 Dirham
const tauxDirhamToCFA = 60; // 1 Dirham = 58 CFA

// Fonction pour convertir le montant CFA en Dirham (Modale 2)
function convertCFAtoDirham() {
    const inputCFA = document.getElementById('cfa2');
    const inputDirham = document.getElementById('dirham2');
    const cfaValue = parseFloat(inputCFA.value);
    if (!isNaN(cfaValue)) {
        const dirhamValue = cfaValue * tauxCFAtoDirham;
        inputDirham.value = dirhamValue.toFixed(2); // Affichage avec 2 décimales
    } else {
        inputDirham.value = '';
    }
}

// Fonction pour convertir le montant Dirham en CFA (Modale 1)
function convertDirhamToCFA() {
    const inputDirham = document.getElementById('dirham1');
    const inputCFA = document.getElementById('cfa1');
    const dirhamValue = parseFloat(inputDirham.value);
    if (!isNaN(dirhamValue)) {
        const cfaValue = dirhamValue * tauxDirhamToCFA;
        inputCFA.value = cfaValue.toFixed(2); // Affichage avec 2 décimales
    } else {
        inputCFA.value = '';
    }
}

// Lier les événements "input" aux fonctions de conversion
document.getElementById('cfa2').addEventListener('input', convertCFAtoDirham);
document.getElementById('dirham1').addEventListener('input', convertDirhamToCFA);
