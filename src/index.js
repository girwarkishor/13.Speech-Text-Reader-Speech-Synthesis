import './scss/main.scss';
import imageUrls from './img/*.jpg';

const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: imageUrls['drink'],
    text: "I'm Thirsty",
  },
  {
    image: imageUrls['food'],
    text: "I'm Hungry",
  },
  {
    image: imageUrls['tired'],
    text: "I'm Tired",
  },
  {
    image: imageUrls['hurt'],
    text: "I'm Hurt",
  },
  {
    image: imageUrls['happy'],
    text: "I'm Happy",
  },
  {
    image: imageUrls['angry'],
    text: "I'm Angry",
  },
  {
    image: imageUrls['sad'],
    text: "I'm Sad",
  },
  {
    image: imageUrls['scared'],
    text: "I'm Scared",
  },
  {
    image: imageUrls['outside'],
    text: 'I Want To Go Outside',
  },
  {
    image: imageUrls['home'],
    text: 'I Want To Go Home',
  },
  {
    image: imageUrls['school'],
    text: 'I Want To Go To School',
  },
  {
    image: imageUrls['grandma'],
    text: 'I Want To Go To Grandmas',
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  // @todo - speak event

  main.appendChild(box);
}

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);

getVoices();
