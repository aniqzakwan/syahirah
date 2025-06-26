function flipAndType(type) {
  const card = document.querySelector(`.flip-card:nth-child(${getCardIndex(type)})`);
  const messageElement = document.getElementById(`msg-${type}`);
  const messages = {
    special: "Today is YOUR day! 🎂 Shine bright and smile wide because the world celebrates you.",
    aspiration: "Dream big, chase hard, and never lose your sparkle. ✨ The future is all yours.",
    memory: "Remember the laughs, the love, and every sweet moment that made you, you. 💖"
  };

  card.classList.add('flipped');
  typeMessage(messages[type], messageElement);
}

function getCardIndex(type) {
  if (type === "special") return 1;
  if (type === "aspiration") return 2;
  return 3;
}

function typeMessage(text, element) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}
