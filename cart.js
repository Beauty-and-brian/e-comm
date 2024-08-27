// Define a variable to hold cart items
let cartItems = [];

// Function to update cart count and dropdown list
function updateCartDisplay() {
  const cartItemCountElem = document.getElementById('cartItemCount');
  const cartDropdownList = document.getElementById('cartItemList');

  // Update cart count in the top header
  cartItemCountElem.textContent = cartItems.length;

  // Clear previous list items
  cartDropdownList.innerHTML = '';

  // Rebuild cart item list
  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    
    // Add a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      cartItems.splice(index, 1); // Remove item from array
      updateCartDisplay(); // Update display
    });
    li.appendChild(removeBtn);

    cartDropdownList.appendChild(li);
  });
}

// Function to add item to cart
function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCartDisplay();
}

// Example usage (to be adapted for your specific needs)
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.product button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCaption = button.parentElement;
      const productName = productCaption.querySelector('h4').textContent;
      const productPrice = productCaption.querySelector('p').textContent;
      addToCart(productName, productPrice);
    });
  });
});
