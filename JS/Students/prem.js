const counter = document.getElementById("counter");
const button = document.getElementById("btn")

let count = 0;
function abc (){
    count++
    counter.textContent = count;
}
button.addEventListener("click" ,() =>{
    abc()
})
