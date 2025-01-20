/*const tauxDirhamToCFA = 58; // 1 Dirham = 58 CFA
    const tauxCFAtoDirham = 1 /66; // 1 CFA = 1 / 58 Dirham

    // Fonction pour convertir Dirham en CFA
    function convertToCFA() {
        const dirhamAmount = parseFloat(document.getElementById('dirham').value);
        if (!isNaN(dirhamAmount) && dirhamAmount > 0) {
            const cfaAmount = dirhamAmount * tauxDirhamToCFA;
            document.getElementById('cfa').value = cfaAmount.toFixed(2);
        } else {
            document.getElementById('cfa').value = '';
        }
    }

    // Fonction pour convertir CFA en Dirham
    function convertToDirham() {
        const cfaAmount = parseFloat(document.getElementById('cfa').value);
        if (!isNaN(cfaAmount) && cfaAmount > 0) {
            const dirhamAmount = cfaAmount * tauxCFAtoDirham;
            document.getElementById('dirham').value = dirhamAmount.toFixed(2);
        } else {
            document.getElementById('dirham').value = '';
        }
    }
*/
// Définir les taux de conversion
const tauxCFAtoDirham = 1/66; // 1 CFA = 0.01515 Dirham
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

// Ajouter des écouteurs d'événements pour la saisie
inputCFA.addEventListener('input', convertCFAtoDirham);
inputDirham.addEventListener('input', convertDirhamToCFA);

    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            let parent = item.parentElement;
            parent.classList.toggle('active');
        });
    });

