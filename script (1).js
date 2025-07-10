document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartCounter = document.getElementById('cart-counter');
    let cart = [];

    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('translate-x-full');
        cartOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        cartOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    });

    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        cartOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    });

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            updateCart();
        });
    });

    function updateCart() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCounter.textContent = totalItems;
    }
});
