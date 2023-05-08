function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const boxesArr = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
    size += 10;
  }

  refs.boxes.append(...boxesArr);
}     
      
refs.createBtn.addEventListener('click', () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.destroyBtn.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
});
