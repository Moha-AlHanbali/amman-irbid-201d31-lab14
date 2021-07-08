/* global Cart */
'use strict';


/* THIS WORK WAS CONTRIBED BY
- Mohammed Al-Hanbali
- Trad Al Hariri
- Dua Jaradat

IT IS RE-PUSHED ON THIS REPO FOR THE SAKE OF LIVE PREVIEW ONLY
THE ORIGINAL WORK CAN BE FOUND AT https://github.com/Moha-AlHanbali/amman-irbid-201d31/tree/main/class-14/lab/starter-code
*/


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementsByTagName('tbody')[0];
  tbody.textContent = '';
  
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  // TODO: Find the table body
  let tbody = document.getElementsByTagName('tbody')[0];
  table.appendChild(tbody);
  // TODO: Iterate over the items in the cart
  
  for(let i= 0;i<cart.items.length;i++){
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    

    // /* Dua's Conflict
    // let btnEl=document.createElement("button");
    // btnEl.textContent = '✂';
    // tdEl1.appendChild(btnEl);



    // Mohammed's Conflict
  
    let button = document.createElement('button');
    button.textContent = '✂';
    button.setAttribute('id', [i])
    tdEl1.appendChild(button);

    //------------------------
    

    trEl.setAttribute("id", cart.items[i].product);
    trEl.addEventListener('click', removeItemFromCart);

    let tdEl2 = document.createElement('td');
    tdEl2.textContent = cart.items[i].quantity;
    
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = cart.items[i].product;
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tbody.appendChild(trEl);
  }
  
  // TODO: Create a TR
  
  // TODO: Create a TD for the delete link, quantity,  and the item

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}


function removeItemFromCart(event) {

/* Dua's Conflict
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
 for(let i=0; i<cart.items.length;i++){
   if (cart.items[i].product === event.target.id){
     cart.removeItem(cart.items[i]);
   }
 }
  
  // TODO: Save the cart back to local storage
  // let cartContent = JSON.stringify(this.items);
  // localStorage.setItem("cart",cartContent);
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
  // console.log("cart")
*/


  // Mohammed's Conflict

   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let buttonID = parseInt(event.target.id);

  let newCartItems = cartItems.splice(buttonID,1)
  // console.log(cartItems);
  // console.log(newCartItems);

  
  // TODO: Save the cart back to local storage

  let updatedcartContent = JSON.stringify(cartItems);
  localStorage.setItem('cart', updatedcartContent);

  // TODO: Re-draw the cart table'



  renderCart()

  //------------------------



}

// This will initialize the page and draw the cart on screen
renderCart();