const techStack = [
  { id: 1, tech: "Javascript", version: 7 },
  { id: 2, tech: "NodeJS", version: 24 },
  { id: 3, tech: "ReactJS", version: 18 },
];

// for(let i=0; i<techStack.length; i++){
//     console.log(techStack[i]);
// }

// for(let tech of techStack){
//     console.log(tech);
// }

// const tech = techStack.forEach((item, index) => {
//   //   console.log(item);
//   //   if (index === 2) {
//   //     console.log(item);
//   //   }
//   if (item.tech === "ReactJS") {
//     console.log(item);
//   }
// });

const text = document.getElementById("text")

const tech = techStack.map((item) => {
  text.innerHTML += `${item.tech}`+ "<br/>" 
});
