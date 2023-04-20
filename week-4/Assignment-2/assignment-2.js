const productList = document.getElementById("product");

function ajax(src, callback) {
  fetch(src)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .then((data) => callback(data))
    .catch((err) => console.error(err));
}

function render(data) {
  data.map((product) => {
    const section = document.createElement("section");
    productList.appendChild(section);
    section.innerHTML = `
         <h1>${product.name}</h1>
         <h2>$${product.price}</h2>
         <p>${product.description}</p>
        `;
  });
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
