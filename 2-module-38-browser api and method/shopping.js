
/* const displayLocalStorage = () => {
     const cart = getCart();

     for (const name in cart) {
          displayProduct(name);

     }
}

const addItem = () => {
     const nameField = document.getElementById("product-name");
     const name = nameField.value;

     if (!name) {
          return;
     }

     // display in the ul
     displayProduct(name);


     // add to local storage
     addProdcutToCart(name);

     nameField.value = '';

}

const displayProduct = name => {
     const ul = document.getElementById("products");
     const li = document.createElement("li");
     li.innerText = name;
     ul.appendChild(li);
}

const getCart = () => {
     const cart = localStorage.getItem('cart');
     let cartObj;
     if (cart === true) {
          cartObj = JSON.parse(cart);
     }
     else {
          cartObj = {};
     }
     return cartObj;
}

const addProdcutToCart = name => {
     const cart = getCart();
     cart[name] = 1;
     const cartStringiFied = JSON.stringify(cart);
     localStorage.setItem('cart', cartStringiFied);

}

const placeOrder = () => {
     document.getElementById("products").textContent = '';
     localStorage.removeItem('cart');
}

displayLocalStorage(); */

const 

const addItem = () => {
     const nameField = document.getElementById("product-name");
     const name = nameField.value;
     // console.log(name);
     if (!name) {
          return;
     }

     // 
     displayProduct(name);

     addProductToCart(name);

     // 
     nameField.value = '';
}

const displayProduct = name => {
     const ul = document.getElementById("products");
     const li = document.createElement("li");
     li.innerText = name;
     ul.appendChild(li);
}
const getCart = () => {
     const cart = localStorage.getItem('cart');
     let cartObj;
     if (cart) {
          cartObj = JSON.parse(cart);
     }
     else {
          cartObj = {};

     }
     return cartObj;

}
const addProductToCart = name => {
     const cart = getCart();
     cart[name] = 1;
     // 
     const cartStringiFied = JSON.stringify(cart);
     localStorage.setItem('cart', cartStringiFied);
}