const obj  = {id:1, name:"JavaScript", version:20};
const objStr = JSON.stringify(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(JSON.stringify(obj));

// console.log(JSON.parse(objStr));

// Object.seal(obj)
// Object.freeze(obj)
// obj.version = 30;
// // delete obj.name
// console.log(obj);

// console.log(Object.entries(obj));
// console.log(obj.hasOwnProperty("name1"));

console.log("name" in obj);


