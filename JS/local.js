// const tech = { id: 1, techStack: "Node", version: 20 };

// const saveToLocal = localStorage.setItem("Tech", JSON.stringify(tech));
// const getFromLocal = JSON.parse(localStorage.getItem("Tech"));
// console.log(getFromLocal);

// getFromLocal.version = 50;
// localStorage.setItem("Tech", JSON.stringify(getFromLocal));
// localStorage.setItem("Name","Mahipal")
// // localStorage.removeItem("Tech")
// localStorage.clear()

const tech = [
  { id: 1, techStack: "Node", version: 20 },
  { id: 2, techStack: "React", version: 18 },
  { id: 3, techStack: "PHP", version: 22 },
];

const save = localStorage.setItem("tech", JSON.stringify(tech));
const get = JSON.parse(localStorage.getItem("tech"));
console.log(get);

const update = get.map((item) => {
  if (item.id === 2) {
    item.version = 50;
  }
  return item;
});
localStorage.setItem("tech", JSON.stringify(update))