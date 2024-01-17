const stripe = Stripe('pk_live_51OZVlaGgga06qK7VzhPiLe8FFukJTBj93yXQqmszMBDxS93H4GHvFj3bFFCNEtmbgxUomIECirBElO9ESNWaV5fC00KZVkW0Gy');
const elements = stripe.elements();

// Pobierz elementy DOM
const adviceParagraph = document.querySelector('.wrapped-text');

// Lista z radami
const adviceList = [
  "Zawsze dbaj o równowagę między ambitnymi marzeniami, a umiejętnością cieszenia się chwilą.",
  "Podziwiaj piękno teraźniejszości, zamiast ciągle pędzić do przodu.",
  "Bądź wdzięczny za to, co już osiągnąłeś w życiu.",
  "Ucz się na błędach i traktuj je jako cenne doświadczenie.",
  "Szukaj harmonii między pracą a życiem prywatnym."
];

// Funkcja losująca radę i aktualizująca tekst
function getRandomAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  const randomAdvice = adviceList[randomIndex];
  adviceParagraph.textContent = randomAdvice;
}

// Dodaj nasłuchiwanie na kliknięcie przycisku
const button1 = document.getElementById('button1');
button1.addEventListener('click', getRandomAdvice);
