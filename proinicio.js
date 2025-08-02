// script.js

document.addEventListener('DOMContentLoaded', () => {
  // ===== Logo animation control =====
  const logo = document.getElementById('logo');
  if (logo) {
    setTimeout(() => {
      logo.style.animationPlayState = 'paused';
    }, 5000);
  }

// Portfolio Carousel
(() => {
  const carousel = document.getElementById('portfolio-carousel');
  if (!carousel) return;

  const itemsWrapper = carousel.querySelector('.pc-items');
  const items        = Array.from(carousel.querySelectorAll('.pc-item'));
  const prevBtn      = carousel.querySelector('.pc-btn.prev');
  const nextBtn      = carousel.querySelector('.pc-btn.next');
  let index = 0;

  function update() {
    const itemWidth = items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(itemsWrapper).gap);
    itemsWrapper.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    update();
  });
  nextBtn.addEventListener('click', () => {
    const maxIndex = items.length - Math.floor(carousel.querySelector('.pc-wrapper').offsetWidth / items[0].offsetWidth);
    index = Math.min(index + 1, maxIndex);
    update();
  });

  // Auto-scroll (opcional)
  setInterval(() => {
    nextBtn.click();
    if (index === items.length) index = -1; // resetear
  }, 5000);
})();

});
 document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    "¡Hola! ¿En qué puedo ayudarte hoy?",
    "¿Cuál es tu nombre?",
    "¿Qué servicio te interesa? (Conciliación, Arbitraje, Composición)",
    "¿Tienes alguna fecha en mente?",
    "¿Presencial o virtual?",
    "¿Algo más en lo que te ayude?"
  ];
  let qIndex = 0;

  const chatBox      = document.getElementById('chatbox');
  const chatBody     = document.getElementById('chat-body');
  const chatOpenBtn  = document.getElementById('chat-open-btn');
  const chatCloseBtn = document.getElementById('chat-close');
  const inputField   = document.getElementById('chat-input-field');

  function botSay(text) {
    const msg = document.createElement('div');
    msg.className = 'msg-bot';
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  function userSay(text) {
    const msg = document.createElement('div');
    msg.className = 'msg-user';
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  function nextQuestion() {
    if (qIndex < questions.length) {
      botSay(questions[qIndex++]);
    }
  }
  window.handleAnswer = function() {
    const ans = inputField.value.trim();
    if (!ans) return false;
    userSay(ans);
    inputField.value = '';
    setTimeout(nextQuestion, 500);
    return false;
  };
  window.toggleChat = function() {
    chatBox.classList.toggle('open');
    chatOpenBtn.style.display = chatBox.classList.contains('open') ? 'none' : 'block';
    if (chatBox.classList.contains('open') && qIndex === 0) nextQuestion();
  };
  chatOpenBtn.addEventListener('click', toggleChat);
  chatCloseBtn.addEventListener('click', toggleChat);
});
