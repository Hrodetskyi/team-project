const cards = document.querySelectorAll('.card_g');

cards.forEach(card => {
  card.addEventListener('mousemove', onMousemoveCardHandler);
  card.addEventListener('mouseleave', onMouseleaveCardHandler);
});

function onMousemoveCardHandler(evt) {
  const cardInner = this.querySelector('.card__inner');
  const halfHeight = cardInner.offsetHeight / 8;
  const halfWidth = cardInner.offsetWidth / 8;
  const y = evt.offsetY;
  const x = evt.offsetX;
  cardInner.style.transform = `rotateX(${(-y + halfHeight) / 5}deg) rotateY(${
    (x - halfWidth) / 4
  }deg)`;
}

function onMouseleaveCardHandler(evt) {
  const cardItem = this.querySelector('.card__inner');

  cardItem.style.transform = '';
}