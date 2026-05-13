function loading() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "block";
    }, 3000);
  });
}
loading();

function countFun() {
  let count = 0;
  const countEle = document.getElementById("count");

  const timeVld = setInterval(() => {
    count++;
    countEle.innerHTML = count;
    if (count === 5) {
      clearInterval(timeVld);
    }
  }, 1000);
}
countFun();

const slide = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/ikmedia/blog/ghost/content/images/2019/12/image-optimization.jpg",
  },
];

function slideShow() {
  let index = 0;
  const box = document.getElementById("slide");
  

  const show = setInterval(() => {
    box.innerHTML = "";
    const img = document.createElement("img");
    img.src = slide[index].image;
    box.appendChild(img);
    index = (index + 1) % slide.length;
  }, 1000);
}
slideShow();
