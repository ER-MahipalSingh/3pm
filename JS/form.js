const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const err = document.getElementById("error");

  try {
    // if (!name || !email || !password) {
    //   //   alert("All files are required");
    //   //   return;
    //   throw "All files are required";
    // }

    if (!name) {
      //   alert("Name is required");
      //   return;
      throw "Name is required";
    }

    if (!email.includes("@") || email === "") {
      //   alert("Email is not valid or empty");
      //   return;
      throw "Email is not valid or empty";
    }

    if (!password) {
      alert("password is required");
      return;
    }
  } catch (error) {
    console.log(error);
    console.error(error);
    err.innerHTML = error;
  } finally {
    console.log();
  }

  console.log(name);
  console.log(email);
  console.log(password);
});
