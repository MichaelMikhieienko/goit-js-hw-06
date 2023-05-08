const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const ulIngredients = document.querySelector("#ingredients");

const itemsIngredients = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ulIngredients.append(...itemsIngredients);



const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  const ul = document.querySelector(".gallery");

const items = images.map((image) => {
  return `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
});

ul.insertAdjacentHTML("afterbegin", items.join(""));




const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counter = 0;

decrementBtn.addEventListener('click', () => {
  counter -= 1;
  counterValue.textContent = counter;
});

incrementBtn.addEventListener('click', () => {
  counter += 1;
  counterValue.textContent = counter;
});




const nameInput = document.querySelector("#name-input");
  const nameOutput = document.querySelector("#name-output");

  nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = nameInput.value;
    }
  });




  const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const validLength = inputEl.dataset.length;
  const enteredLength = inputEl.value.length;

  if (enteredLength === Number(validLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});



const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', event => {
  text.style.fontSize = event.currentTarget.value + 'px';
});



const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;
  
  if (email.value === '' || password.value === '') {
    alert('All fields must be filled in!');
    return;
  }
  
  const formData = {
    email: email.value,
    password: password.value,
  };
  
  console.log(formData);
  
  form.reset();
}




function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const button = document.querySelector('.change-color');
      const colorSpan = document.querySelector('.color');

      function changeBackgroundColor() {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
        colorSpan.textContent = color;
      }   
      button.addEventListener('click', changeBackgroundColor);



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
      