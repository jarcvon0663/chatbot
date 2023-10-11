document.addEventListener('DOMContentLoaded', function () {
    const chatContainer = document.getElementById('chat');
    const userInput = document.getElementById('user-input');

    // Cargar la biblioteca "compromise"
    compromise.load();

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = message;
        if (isUser) {
            messageDiv.style.backgroundColor = '#c0ffc0'; // User message color
        }
        chatContainer.appendChild(messageDiv);
    }

    // Función para responder a mensajes del usuario con "compromise"
    function respondToUserMessage(userMessage) {
        // Utilizar "compromise" para analizar el mensaje del usuario
        const doc = compromise(userMessage);

        // Detectar el saludo "Hola"
        if (doc.has('hola')) {
            // Puedes personalizar la respuesta aquí
            addMessage('Chatbot: ¡Hola! 🎮 Me indicas la plataforma (celular o PC) y juego.');
        } else {
            // Si "compromise" no detecta "Hola," puedes proporcionar una respuesta genérica.
            addMessage(`Chatbot: No entendí, ¿puedes reformular tu pregunta?`);
        }
    }

    // Event listener para mensajes del usuario
    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita el comportamiento predeterminado de la tecla "Enter"
            const userMessage = userInput.value;
            addMessage(`Tú: ${userMessage}`, true);
            userInput.value = '';

            // Llama a la función para responder al mensaje del usuario
            respondToUserMessage(userMessage);
        }
    });
});
