const user = [
  {
    id: 1,
    name: "Aarav Patel",
    age: 28,
    city: "Ahmedabad",
  },
  {
    id: 2,
    name: "Dhara Shah",
    age: 34,
    city: "Surat",
  },
  {
    id: 3,
    name: "Hardik Mehta",
    age: 22,
    city: "Rajkot",
  },
  {
    id: 4,
    name: "Kinjal Gadhvi",
    age: 41,
    city: "Vadodara",
  },
  {
    id: 5,
    name: "Parth Trivedi",
    age: 29,
    city: "Bhavnagar",
  },
  {
    id: 6,
    name: "Jinal Vaghani",
    age: 26,
    city: "Jamnagar",
  },
  {
    id: 7,
    name: "Tushar Pandya",
    age: 37,
    city: "Junagadh",
  },
  {
    id: 8,
    name: "Bindiya Choksi",
    age: 31,
    city: "Gandhinagar",
  },
  {
    id: 9,
    name: "Manan Desai",
    age: 45,
    city: "Anand",
  },
  {
    id: 10,
    name: "Heta Solanki",
    age: 24,
    city: "Morbi",
  },
];

document.getElementById("btn").onclick=function(){

const agee = user.filter((user) => user.age >= 30);
console.log(agee)
const ht = document.getElementById("ageee")
agee.forEach((agee)=> {
    ht.innerHTML += `${agee.name}` + "<br>";
})};


// const btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
// ht.innerHTML=""
// agee.forEach((agee)=> {
//     ht.innerHTML += `${agee.name}` + "<br>";
// })
// })






