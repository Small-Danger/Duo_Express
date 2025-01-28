
    // When the form is submitted
    document.getElementById('directionForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the default form submission

        // Get the values from the form
        const weight = parseFloat(document.getElementById('weight').value);
        const departure = document.getElementById('departure').value;

        // Check if the weight is at least 10kg
        if (weight < 10) {
            alert("Le poids minimum est de 10 kg.");
            return;
        }

        // Calculate the quote in dirhams (80 dirhams per kg)
        const quote = weight * 80;

        // Prepare the message for the modal
        let directionMessage = departure === "france_to_morocco" ? "France → Maroc (Casablanca)" : "Maroc → France";
        const message = `J'ai un colis de ${weight} kg et j'aimerais envoyer ${directionMessage}. Le devis est de ${quote} dirhams.`;

        // Show the modal with the quote message
        document.getElementById('quoteMessage').innerText = message;

        // Set the WhatsApp link for confirmation
        const whatsappLink = `https://wa.me/212620876468?text=${encodeURIComponent(message)}`;
        document.getElementById('confirmQuoteBtn').href = whatsappLink;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('quoteModal'));
        modal.show();
    });

