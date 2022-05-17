window.onload = () => {
  const localStorage = window.localStorage;

  const vitamins = [
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/BBCOM_NEW_Signature_Multi_V3_grey_465x.jpg?v=1640304349",
      price: "20",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/EVL4410051_grey_465x.jpg?v=1636139665",
      price: "18",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/OPT2380278_grey_465x.jpg?v=16361435126",
      price: "15",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/UNIV4310236_grey_465x.jpg?v=1636145636",
      price: "30",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/29305_grey_465x.jpg?v=1636144104",
      price: "19",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/RSP6380400_grey_465x.jpg?v=1636145598",
      price: "28",
    },
    {
      price: "32",
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/EVL5230009_grey_465x.jpg?v=1636140403",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/OPT127_grey_465x.jpg?v=1636144698",
      price: "35",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/MMEDS5790065_grey_465x.jpg?v=1636141286",
      price: "29",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/ALL820054_grey_465x.jpg?v=1636138908",
      price: "27",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/MHP5040129_grey_465x.jpg?v=1636141858",
      price: "25",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0564/3668/7008/products/IN980146_grey_465x.jpg?v=1636145082",
      price: "30",
    },
  ];

  const list = document.getElementById("vitamins-list");

  const addItemToCart = (index) => {
    console.log("ADD THIS ITEM TO CART");
    let previousItems = JSON.parse(localStorage.getItem("cart")) ?? [];
    console.log(previousItems);
    previousItems.push(vitamins[index]);

    localStorage.setItem("cart", JSON.stringify(previousItems));
  };

  vitamins.map((vitamin, index) => {
    const wrapper = document.createElement("div");

    wrapper.classList.add("protein-box");

    const img = document.createElement("img");

    const heading = document.createElement("h2");

    const addToCartButton = document.createElement("button");

    heading.innerText = `Price ${vitamin.price} $`;
    img.classList.add("img-fluid");
    img.src = vitamin.img;

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
