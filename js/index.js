const allElements = document.querySelectorAll('.element');
const elementNames = document.querySelectorAll('.element .name');
let elementIndex = 0;

const categoryContainer = document.querySelector('.category-container');
const closeCategory = document.querySelector(
  '.category-container .close-category'
);

categoryContainer.addEventListener('click', () => {
  categoryContainer.style.transition = 'all 0.375s';
  categoryContainer.style.opacity = '0';
  setTimeout(() => {
    categoryContainer.style.display = 'none';
  }, 500);
});

closeCategory.addEventListener('click', () => {
  categoryContainer.style.transition = 'all 0.375s';
  categoryContainer.style.opacity = '0';
  setTimeout(() => {
    categoryContainer.style.display = 'none';
  }, 500);
});

function handleCategory() {
  categoryContainer.style.transition = 'none';
  categoryContainer.style.opacity = '1';
  categoryContainer.style.display = 'block';
}

const nobleGas = document.querySelector('.categories .noble-gas'),
  halogen = document.querySelector('.categories .halogen'),
  alkali = document.querySelector('.categories .alkali'),
  lanthanoid = document.querySelector('.categories .lanthanoid'),
  actinoid = document.querySelector('.categories .actinoid'),
  alkalineEarth = document.querySelector('.categories .alkaline-earth'),
  superActinoid = document.querySelector('.categories .super-actinoid'),
  metal = document.querySelector('.categories .metal'),
  nonmetal = document.querySelector('.categories .nonmetal'),
  transitionMetal = document.querySelector('.categories .transition-metal'),
  all = document.querySelector('.categories .all');

const nobleGases = document.querySelectorAll('.container .row .noble-gas'),
  halogens = document.querySelectorAll('.container .row .halogen'),
  alkalis = document.querySelectorAll('.container .row .alkali'),
  lanthanoids = document.querySelectorAll('.container .row .lanthanoid'),
  actinoids = document.querySelectorAll('.container .row .actinoid'),
  alkalineEarths = document.querySelectorAll('.container .row .alkaline-earth'),
  superActinoids = document.querySelectorAll('.container .row .super-actinoid'),
  metals = document.querySelectorAll('.container .row .metal'),
  nonmetals = document.querySelectorAll('.container .row .nonmetal'),
  transitionMetals = document.querySelectorAll(
    '.container .row .transition-metal'
  ),
  elementRanges = document.querySelectorAll('.container .row .element-range');

nobleGas.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  nobleGases.forEach((element) => (element.style.opacity = '1'));
});
halogen.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  halogens.forEach((element) => (element.style.opacity = '1'));
});
alkali.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  alkalis.forEach((element) => (element.style.opacity = '1'));
});
lanthanoid.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  lanthanoids.forEach((element) => (element.style.opacity = '1'));
});
actinoid.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  actinoids.forEach((element) => (element.style.opacity = '1'));
});
alkalineEarth.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  alkalineEarths.forEach((element) => (element.style.opacity = '1'));
});
transitionMetal.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  transitionMetals.forEach((element) => (element.style.opacity = '1'));
});
superActinoid.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  superActinoids.forEach((element) => (element.style.opacity = '1'));
});
metal.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  metals.forEach((element) => (element.style.opacity = '1'));
});
nonmetal.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '0.375'));
  nonmetals.forEach((element) => (element.style.opacity = '1'));
});
all.addEventListener('click', () => {
  allElements.forEach((element) => (element.style.opacity = '1'));
});
