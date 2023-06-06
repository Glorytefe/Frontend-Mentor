const testimonyElem = document.querySelector("#testimony");
const testifierElem = document.querySelector("#testifier");
const testifierImgElem = document.querySelector("#testifier-img");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const container = document.getElementById("container");

let index = 0

const testimonies = [
  {
    testimony: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    name: "Tanya Sinclair",
    occupation: "UX Engineer",
    img: "../images/image-tanya.jpg",
  },
  {
    testimony: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    name: "John Tarkpor",
    occupation: "Junior Front-end Developer",
    img: "../images/image-john.jpg",
  },
];

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateTestimony("slide-right");
  }
});

nextBtn.addEventListener("click", () => {
  if (index < testimonies.length - 1) {
    index++;
    updateTestimony("slide-left");
  }
});

const updateTestimony = (className) => {
  const { testimony, img, name, occupation } = testimonies[index];

  testimonyElem.innerHTML = testimony;
  testifierImgElem.src = img;
  testifierImgElem.alt = name;

  testifierElem.innerHTML = `
    <b>${name}</b>
    <span>${occupation}</span>
  `;

  addTransitionClassWithTimeout(className, 1500);
};

const addTransitionClassWithTimeout = (className, timeout) => {
  testimonyElem.classList.add(className);
  testifierImgElem.classList.add(className);
  testifierElem.classList.add(className);

  setTimeout(() => {
    testimonyElem.classList.remove(className);
    testifierImgElem.classList.remove(className);
    testifierElem.classList.remove(className);
  }, timeout);
};

// Initial fade-in animation
setTimeout(() => {
  container.classList.remove("fade-in");
  container.style.opacity = 1;
}, 2400);
