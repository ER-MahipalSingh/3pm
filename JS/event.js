// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Hello");
// });

// // const header = document.querySelector(".header")
// const header = document.querySelectorAll(".header")

// header.forEach((item)=>{
//     item.innerHTML = "hello"
// })

const techStack = [
  { id: 1, tech: "Javascript", version: 7 },
  { id: 2, tech: "NodeJS", version: 24 },
  { id: 3, tech: "ReactJS", version: 18 },
];

const btn = document.getElementById("btn");
const continer = document.getElementById("continer");

btn.addEventListener("click", () => {
  continer.innerHTML = "";

  techStack.forEach((tech) => {
    const p = document.createElement("p");
    p.innerHTML = `${tech.tech}`;
    continer.appendChild(p);
  });
});
