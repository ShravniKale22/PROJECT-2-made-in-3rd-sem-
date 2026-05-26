document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = this.getAttribute('data-price');

        // Retrieve cart from localStorage or create a new array if it doesn't exist
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add item to the cart
        cart.push({ name: itemName, price: itemPrice });

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${itemName} has been added to your cart!`);
    });
});

