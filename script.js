const adviceParagraph = document.getElementById('adviceParagraph');
const unlockButton = document.getElementById('unlockButton');
const drawButton = document.getElementById('drawButton');

const adviceList = [
  "Zawsze dbaj o równowagę między ambitnymi marzeniami, a umiejętnością cieszenia się chwilą.",
  "Podziwiaj piękno teraźniejszości, zamiast ciągle pędzić do przodu.",
  "Bądź wdzięczny za to, co już osiągnąłeś w życiu.",
  "Ucz się na błędach i traktuj je jako cenne doświadczenie.",
  "Szukaj harmonii między pracą a życiem prywatnym."
  "Rób to, co kochasz, a praca stanie się przyjemnością.",
  "Staraj się zawsze patrzeć na sytuacje z pozytywnego punktu widzenia.",
  "Zachowaj zdrowy balans między pracą a odpoczynkiem.",
  "Bądź otwarty na nowe możliwości i doświadczenia.",
  "Ciesz się drobnymi chwilami szczęścia każdego dnia.",
];

function unlock() {
  // Tutaj dodaj kod obsługujący płatność, np. wywołanie płatności za pomocą Stripe
  // Po pomyślnej płatności możesz ukryć przycisk "Odblokuj" i pokazać przycisk "Losuj"
  unlockButton.style.display = 'none';
  drawButton.style.display = 'block';
}

function draw() {
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  adviceParagraph.textContent = adviceList[randomIndex];

  // Ukrycie przycisku "Losuj" i pokazanie przycisku "Odblokuj"
  drawButton.style.display = 'none';
  unlockButton.style.display = 'block';
}

// Dodaj nasłuchiwanie na kliknięcie przycisku "Losuj"
drawButton.addEventListener('click', draw);
