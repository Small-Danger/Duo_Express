//Script pour calculer le prix et afficher la modal
    function showModal() {
        // Récupérer les valeurs du formulaire
        const weight = parseFloat(document.getElementById("weight").value);
        const departureCountry = document.getElementById("departureCountry").value;
        const destination = document.getElementById("destination").value;
        let price = 0;

        // Calcul du prix en fonction du poids, du pays de départ et de la destination
        if (departureCountry === "Casa") {
            // Cas où l'expédition est de Casablanca vers le pays de destination
            switch (destination) {
                case "Burkina Faso":
                    price = weight * 75;
                    break;
                case "Mali":
                    price = weight * 80;
                    break;
                case "Sénégal":
                    price = weight * 80;
                    break;
                case "Côte d'Ivoire":
                    price = weight * 80;
                    break;
                case "Guinée":
                    price = weight * 80;
                    break;
            }
        } else if (departureCountry !== "Casa") {
            // Cas où l'expédition est depuis le pays de départ vers Casablanca
            switch (destination) {
                case "Casa":
                    price = weight * 8 + 40;
                    break;
            }
        }

        // Affichage des informations dans la modal
        document.getElementById("modalDirection").innerText = departureCountry === "Casa" ? "Casa" : "Casa";
        document.getElementById("modalDestination").innerText = destination;
        document.getElementById("modalWeight").innerText = weight;
        document.getElementById("modalPrice").innerText = `${price} Dirhams`;

        // Afficher la modal
        var myModal = new bootstrap.Modal(document.getElementById('priceModal'));
        myModal.show();
    }
