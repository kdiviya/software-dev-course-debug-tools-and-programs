const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

// const cart = [
//   { name: "Laptop", price: 1000 }];

//const cart = [];

function calculateTotal(cartItems) {
  debugger;
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  //debugger;
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate < 0 || discountRate > 1){
    console.log("Invalid Discount Rate") ;// Bug: Missing validation for discountRate
  }
  else {
    return total - total * discountRate; 
  }
  
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

/* 3. Validate Fixes:
○ Test the corrected program with the given cart and a few edge cases:
i. An empty cart. -> It displays the below
Shopping Cart
Total: $0
Items: Total: $0.00

ii. A cart with one item. -> It displays the below
Shopping Cart
Total: $800
Items: Laptop: $1000 Total: $800.00

iii. A discountRate of 0  -> It displays the below for empty cart at dicosunt rate 0
Shopping Cart
Total: $0
Items: 
Total: $0.00
*/

/*4. Write a Summary:

○ Explain how debugging tools helped you locate and resolve issues in
comments within your GitHub Repo. 
Debugging tools played a crucial role in helping me locate and resolve issues in my GitHub repository. 
By using the call stack, I was able to analyze the discount value during each iteration 
and for every item in the cart. 

This helped me identify and fix logical errors in the discount calculation. 
Additionally, setting breakpoints within the function allowed me to closely examine the flow of execution 
and identify incorrect conditions inside the for loop. These tools made it easier to 
understand the behavior of the code and ensure it produced the correct results.
*/
