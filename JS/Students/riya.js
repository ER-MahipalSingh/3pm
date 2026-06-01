const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
    const err = document.getElementById("error")
    
    
  console.log(name);
  console.log(password);
  console.log(email);

  try {
    if(!name || !password || !email){
        throw "fill all details"
    }
  } catch (error) {
    err.innerHTML = "Enter all details"
    console.error(error)
  }

});
