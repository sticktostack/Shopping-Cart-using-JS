// showing the cart box after clicking on the carticon
document.querySelector("#carticon").addEventListener("click", () => {
  document.querySelector(".cartsection").style.transform = "translateX(0%)";
});
// hiding the cart box after clicking on the carticon
document.querySelector("#closebtn").addEventListener("click", () => {
  document.querySelector(".cartsection").style.transform = "translateX(100%)";
});

// holding the values of the cart section 
let cart = [];

// loading all the products from an random API 
function loadProducts(){
fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data.products; // holding the array

    products.forEach((product) => {
      // looping over all the fetched products 
      let div = document.createElement("div");
      div.className = "cards";
      let img = document.createElement("img");
      img.src = product.thumbnail;
      let title = document.createElement("h3");
      title.innerHTML = product.title;
      let price = document.createElement("h4");
      price.id = 'price'
      price.innerHTML = `$${product.price}`;
      let addBtn = document.createElement("button");
      addBtn.innerHTML = "Add to cart";
      addBtn.id = "add";
      div.addEventListener('click',(e)=>{
        if(e.target === addBtn){
          // showing the animation after clicking the add button 
          document.querySelector("#carticon").innerHTML = 'Added to cart'
          document.querySelector("#carticon").style.transform = 'translateX(30%)'
          document.querySelector("#carticon").style.fontSize = '26px'
          setTimeout(() => {
            document.querySelector("#carticon").style.fontSize = '45px'
          document.querySelector("#carticon").innerHTML = '<i class="ri-shopping-cart-2-fill"></i>'
          }, 500);
          // animation ends here 

          let card = e.target.closest('.cards') //holding the nearest div of the individual addBUtton 
          let product = { // creating a object after clicking on the add button which holds all the data ofthe individual product
            image : card.querySelector('img').src,
            title: card.querySelector('h3').innerHTML,
            price: card.querySelector('h4').innerHTML
          };
          // pushing all the added products on the cart 
          console.log(`${product.title} added`);
          cart.push(product)
          counter = ''
          cart.forEach((prod)=>{
          // creating the cart section dynamically 
            counter += ` 
            <div class="product">
                  <div class="left"><img src="${prod.image}" ></div>
                  <div class="right">
                      <h2>${prod.title}</h2>
                      <p>price : ${prod.price}</p>
                  </div>
              </div>
            `
            document.querySelector('.productsection').innerHTML = counter
            console.log(prod);
          })
          
        }else{
          console.log('Not clicked');
        }
      })

      // appending all the dynamically created elements 
      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(price);
      div.appendChild(addBtn);
      document.querySelector(".card-container").appendChild(div);

    });
  });
}
loadProducts()