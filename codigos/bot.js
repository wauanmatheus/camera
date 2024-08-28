function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        addMessageToChat('user', message);
        setTimeout(() => botResponse(message), 1000);
        userInput.value = '';
    }
}

function addMessageToChat(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.innerHTML = `<p>${message}</p>`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function botResponse(userMessage) {
    let response = '';

    switch (userMessage.toLowerCase()) {
        case 'o que é o style?':
            response = 'O Style é um aplicativo inovador que ajuda você a combinar suas roupas de maneira sofisticada e personalizada. Com uma interface intuitiva e ferramentas avançadas, o Style permite criar looks perfeitos para qualquer ocasião.';
            break;
        case 'Como posso usar o Style para combinar minhas roupas?':
            response = 'Basta fazer o upload de imagens das suas roupas no Style, e o nosso algoritmo inteligente irá sugerir combinações que melhor se adequam ao seu estilo e preferência. Você também pode explorar diferentes combinações manualmente.';
            break;
        case 'Quais são os níveis de combinações no Style?':
            response = 'O Style oferece três níveis de combinações: Básico, Avançado e Expert. No nível Básico, você recebe sugestões de combinações simples e elegantes. No nível Avançado, as sugestões são mais elaboradas, considerando diferentes estilos e tendências. No nível Expert, você obtém combinações exclusivas e sofisticadas, ideais para eventos especiais.';
            break;
        case 'Quem criou o Style?':
            response = 'O Style foi desenvolvido pela Lookfy, uma empresa formada por alunos do IF durante a disciplina de Projeto Integrador. Nosso objetivo é trazer inovação e praticidade ao mundo da moda através da tecnologia.';
            break;
        case 'Quais são os principais recursos do Style?':
            response = 'O Style oferece uma variedade de recursos, incluindo combinações de roupas personalizadas, e a possibilidade de salvar e compartilhar seus looks favoritos. Tudo isso em uma plataforma visualmente atraente e fácil de usar.';
            break;
        default:
            response = 'Desculpe, não entendi. Tente escolher uma das opções acima!';
    }

    addMessageToChat('bot', response);
}

function handleOptionClick(option) {
    addMessageToChat('user', option);
    setTimeout(() => botResponse(option), 1000);
}
