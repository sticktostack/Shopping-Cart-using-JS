document.querySelector("#carticon").addEventListener("click", () => {
  document.querySelector(".cartsection").style.transform = "translateX(0%)";
});
document.querySelector("#closebtn").addEventListener("click", () => {
  document.querySelector(".cartsection").style.transform = "translateX(100%)";
});
let cardContainer = document.querySelector(".card-container");

function loadProducts(){
fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data.products;
    products.forEach((product) => {
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
          document.querySelector("#carticon").innerHTML = 'Added to cart'
          document.querySelector("#carticon").style.transform = 'translateX(30%)'
          document.querySelector("#carticon").style.fontSize = '27px'
          setTimeout(() => {
            document.querySelector("#carticon").style.fontSize = '45px'
          document.querySelector("#carticon").innerHTML = '<i class="ri-shopping-cart-2-fill"></i>'
          }, 1000);
        }else{
          console.log('no');
        }
      })


      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(price);
      div.appendChild(addBtn);
      cardContainer.appendChild(div);

    });
  });
}
loadProducts()

let cart = [];