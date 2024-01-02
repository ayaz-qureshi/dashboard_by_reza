let productData = [
  {
    image: "/images/istockphoto-1458492520-170667a.png",
    tag: "SAMSUNG",
    name: "Lenovo Xoinin PLUS Blutooth Mouse",
    price: "$12.50",
    ratings: 12,
  },
  {
    image: "/images/7ae651ad8a5bcdb86fe7a633b222c552.png",
    tag: "SAMSUNG",
    name: "Lenovo Xoinin PLUS Blutooth Mouse",
    price: "$12.50",
    ratings: 12,
  },
  {
    image: "/images/6bddf5f0ede42f16eeb32c28f3f1d172.jpg_300x0q75.png",
    tag: "SAMSUNG",
    name: "Lenovo Xoinin PLUS Blutooth Mouse",
    price: "$12.50",
    ratings: 12,
  },
 
];

  // Retrieve the existing product data from sessionStorage
  const storedProductData = sessionStorage.getItem('productData');
  if(storedProductData){

    productData = storedProductData ? JSON.parse(storedProductData) : [];
  }

  // if(sessionData.length > 0){

  //   productData = productData.concat(sessionData);
  // }


//   productData = [];

//   // Append the retrieved data to the existing productData array
// productData = productData.concat(storedProducts);

// Reference to the container div
const container = document.getElementById("container");

// Use .map() to create product cards for each item in the array
const productCards = productData.map((product) => {
  const card = document.createElement("div");
  card.classList.add("product_card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = "";

  const contentDiv = document.createElement("div");

  const tag = document.createElement("span");
  tag.classList.add("product_tag");
  tag.textContent = product.tag;

  const name = document.createElement("p");
  name.textContent = product.name;

  const price = document.createElement("div");
  price.classList.add("product_card_price");
  price.textContent = product.price;

  const ratings = document.createElement("div");
  ratings.classList.add("product_card_ratings");
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.classList.add("bx", "bxs-star");
    ratings.appendChild(star);
  }
  const ratingsCount = document.createElement("p");
  ratingsCount.textContent = `(${product.ratings})`;
  ratings.appendChild(ratingsCount);

  card.appendChild(image);
  contentDiv.appendChild(tag);
  contentDiv.appendChild(name);
  contentDiv.appendChild(price);
  contentDiv.appendChild(ratings);
  card.appendChild(contentDiv);

  return card;
});

// Append the created product cards to the container
productCards.forEach((card) => {
  container.appendChild(card);
});




// Add item function
function addPopUp() {
  document.getElementById("myModal").style.display = "block";
}

  const input = document.getElementById("imageInput");
  const preview = document.getElementById("imagePreview");
  const tag = document.getElementById("tag");
  const title = document.getElementById("title");
  const price = document.getElementById("price");

// Preview the image
function previewImage() {
 

  if (input && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    preview.style.border = "1px solid var(--dark-grey)";
  }
}

function closeModal() {
  
  document.getElementById("myModal").style.display = "none";
  
  if (input) {
    input.value = "";
  }
  if (tag) {
    tag.value = "";
  }
  if (title) {
    title.value = "";
  }
  if (price) {
    price.value = "";
  }

  if (preview) {
    preview.src = "";
    preview.style.border = "none";
  }
}

function addIProduct() {
  const inputValue = document.getElementById("imageInput").files;
  const tagValue = document.getElementById("tag").value;
  const titleValue = document.getElementById("title").value;
  const priceValue = document.getElementById("price").value;

  if (inputValue.length > 0 && tagValue && titleValue && priceValue) {
    const selectedImage = input.files[0];

    // Create a new FileReader to read the selected image
    const reader = new FileReader();

    reader.onload = function (e) {
      // e.target.result contains the data URL of the selected image
      const imageDataURL = e.target.result;

    // Create a new product object
    const newProduct = {
      
      image: imageDataURL,
      tag: tagValue,
      name: titleValue,
      price: priceValue,
      ratings: 12,
    };

    // Add the new product to the productData array
    productData.push(newProduct);

    // Save the updated productData to sessionStorage
    sessionStorage.setItem('productData', JSON.stringify(productData));

    // Create a new product card
    const card = document.createElement("div");
    card.classList.add("product_card");

    const image = document.createElement("img");
    image.src = imageDataURL;
    image.alt = "";

    const contentDiv = document.createElement("div");

    const tag = document.createElement("span");
    tag.classList.add("product_tag");
    tag.textContent = tagValue;

    const name = document.createElement("p");
    name.textContent = titleValue;

    const price = document.createElement("div");
    price.classList.add("product_card_price");
    price.textContent = priceValue;

    const ratings = document.createElement("div");
    ratings.classList.add("product_card_ratings");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.classList.add("bx", "bxs-star");
      ratings.appendChild(star);
    }

    contentDiv.appendChild(tag);
    contentDiv.appendChild(name);
    contentDiv.appendChild(price);
    contentDiv.appendChild(ratings);

    card.appendChild(image);
    card.appendChild(contentDiv);

    // Append the new card to the container
    container.appendChild(card);

    closeModal();
  }
  reader.readAsDataURL(selectedImage);
    return card;
  }
}




 
   





