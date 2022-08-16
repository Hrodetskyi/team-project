(() => {
  const refs = {
    flipBtn: document.querySelector('[data-flip-open]'),
    unflipBtn: document.querySelector('[data-flip-close]'),
    card: document.querySelector('[data-card]'),
  };

  refs.flipBtn.addEventListener('click', toggleCard);
  refs.unflipBtn.addEventListener("click", toggleCard);

  function toggleCard() {
    refs.card.classList.toggle('is-flipped');
  }
})();

(() => {
  const refs = {
    flipScndBtn: document.querySelector("[data-flip-second]"),
    unflipScndBtn: document.querySelector("[data-close-second]"),
    scndCard: document.querySelector("[data-card-second]"),
  };

  refs.flipScndBtn.addEventListener("click", toggleCard);
  refs.unflipScndBtn.addEventListener("click", toggleCard);

  function toggleCard() {
    refs.scndCard.classList.toggle("is-flipped");
  }
})();

(() => {
  const refs = {
    flipTrdBtn: document.querySelector("[data-flip-third]"),
    unflipTrdBtn: document.querySelector("[data-close-third]"),
    thrdCard: document.querySelector("[data-card-third]"),
  };

  refs.flipTrdBtn.addEventListener("click", toggleCard);
  refs.unflipTrdBtn.addEventListener("click", toggleCard);

  function toggleCard() {
    refs.thrdCard.classList.toggle("is-flipped");
  }
})();
