'use strict';


/* THIS WORK WAS CONTRIBED BY
- Mohammed Al-Hanbali
- Trad Al Hariri
- Dua Jaradat

IT IS RE-PUSHED ON THIS REPO FOR THE SAKE OF LIVE PREVIEW ONLY
THE ORIGINAL WORK CAN BE FOUND AT https://github.com/Moha-AlHanbali/amman-irbid-201d31/tree/main/class-14/lab/starter-code
*/


// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
    // TODO: Fill in this instance method to create a new CartItem and add it to this.items
    let newCartItem = new CartItem(product, quantity);
    this.items.push(newCartItem);
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  let cartContent = JSON.stringify(this.items);
  localStorage.setItem("cart", cartContent);
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.


  
  // const index = cart.items.indexOf(item);
  // if (index > -1) {
    //   cart.items.splice(index, 1);
    // }
    
    // Note: You will have to decide what kind of parameter to pass in here!
    
    localStorage.removeItem('cart');
};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();