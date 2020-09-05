
function addBananas() {
    addItemToCart("Bananas", 1.60)
}


function addApples() {
    addItemToCart("Apple", 2.30)
}

function addItemToCart(Item,Price){
let cart = document.getElementById("ShoppingCart")
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(`${Item} $${Price}`);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
cart.appendChild(node);
}
