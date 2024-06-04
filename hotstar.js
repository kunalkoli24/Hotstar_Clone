let movies = [
  {
    name: "Loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat in repellat rem et iusto?",
    image: " slider 1.PNG"
  },
  {
    name: "Falcon and the Winter Soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat in repellat rem et iusto?",
    image: "slider 2.PNG"
  },
  {
    name: "WandaVision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat in repellat rem et iusto?",
    image: "slider 3.PNG"
  },
  {
    name: "Raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat in repellat rem et iusto?",
    image: "slider 4.PNG"
  },
  {
    name: "Luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat in repellat rem et iusto?",
    image: "slider 5.PNG"
  },
];

const carousel = document.querySelector('.caraousel');
const slidesContainer = document.querySelector('.caraousel');
const slideWidth = carousel.offsetWidth; 
let sliderIndex = 0;

const createSlide = () => {
  let slide = document.createElement('div');
  slide.className = 'slider';
  slide.style.width = `${slideWidth}px`; 

  let slideContent = document.createElement('div');
  slideContent.className = 'slide-content';

  let h1 = document.createElement('h1');
  h1.className = 'movie-title';
  h1.textContent = movies[sliderIndex].name;

  let p = document.createElement('p');
  p.className = 'movie-des';
  p.textContent = movies[sliderIndex].des;

  let img = document.createElement('img');
  img.src = movies[sliderIndex].image;
  img.alt = movies[sliderIndex].name;

  slideContent.appendChild(h1);
  slideContent.appendChild(p);
  slide.appendChild(slideContent);
  slide.appendChild(img);
  
  carousel.appendChild(slide);

  sliderIndex++;
  if (sliderIndex >= movies.length) {
    sliderIndex = 0;
  }
};

for (let i = 0; i < movies.length; i++) {
  createSlide();
}

slidesContainer.style.transition = 'transform 1s ease-in-out';

const slideCarousel = () => {
  slidesContainer.style.transform = `translateX(-${sliderIndex * slideWidth}px)`;
  sliderIndex++;
  if (sliderIndex >= movies.length) {
    sliderIndex = 0;
  }
};

setInterval(() => {
  slideCarousel();
}, 2000);

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(item => {
  item.addEventListener("mouseover", () => {
    let video = item.querySelector('video');
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.querySelector('video');
    video.pause();
  });
});

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
