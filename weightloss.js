window.onload = () => {
  const weightLoss = [
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/EVL4480077_grey_465x.jpg?v=1637784888",
      price: "29",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/SWOL6070150_grey_465x.jpg?v=1636141915",
      price: "37",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/JYM5000186_grey_465x.jpg?v=1636138676",
      price: "31",
    },
    {
      price: "27",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/prod5770011_grey_465x.jpg?v=1636143147",
    },
    {
      price: "28",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/RSP4890011_grey_465x.jpg?v=1636139913",
    },
    {
      price: "19",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/prod3950036_grey_465x.jpg?v=1636139337",
    },
    {
      price: "30",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/UNIV109_grey_465x.jpg?v=1636144200",
    },
    {
      price: "40",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/prod5800010_grey_465x.jpg?v=1636141838",
    },
    {
      price: "21",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/hyde-thermo-fire-melon-11-05-2021_465x.jpg?v=1636156026",
    },
    {
      price: "23",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/IN6110274_grey_465x.jpg?v=1636141235",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/NLA5440273_grey_465x.jpg?v=1636140714",
      price: "25",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/GLAX6370155_grey_465x.jpg?v=1636142868",
      price: "20",
    },
  ];

  const list = document.getElementById("weightloss-list");

  const addItemToCart = (index) => {
    console.log("ADD THIS ITEM TO CART");
    let previousItems = JSON.parse(localStorage.getItem("cart")) ?? [];
    console.log(previousItems);
    previousItems.push(weightLoss[index]);

    localStorage.setItem("cart", JSON.stringify(previousItems));
  };

  weightLoss.map((product, index) => {
    const wrapper = document.createElement("div");

    wrapper.classList.add("protein-box");

    const img = document.createElement("img");

    const heading = document.createElement("h2");

    const addToCartButton = document.createElement("button");

    heading.innerText = `Price ${product.price} $`;
    img.classList.add("img-fluid");
    img.src = product.img;

    addToCartButton.classList.add("btn");
    addToCartButton.classList.add("btn-outline-secondary");
    addToCartButton.innerText = "Add to cart";

    wrapper.appendChild(img);
    wrapper.appendChild(heading);
    wrapper.appendChild(addToCartButton);

    addToCartButton.addEventListener("click", () => {
      addItemToCart(index);
    });

    list.appendChild(wrapper);
  });
};
