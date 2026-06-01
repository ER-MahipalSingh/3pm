const fetchAPI = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Api CANT FETCH");
    }
    const data = await res.json();
    //    console.log (data)
    renderData(data.products);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

fetchAPI();

const renderData = (products) => {
  console.log(products);
  const container = document.getElementById("container");
  container.innerHTML = "";

  products?.foreach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1>${product.title}<h1>
        <img src="${product.thumbnail}">`;

    container.appendChild(div);
  });
};
renderData();
