// ================= CART =================

let cart = [];


// Add item to cart

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to cart! ☕");

}


// Update cart

function updateCart() {

    const cartItems = document.getElementById("cart-items");

    const cartCount = document.getElementById("cart-count");

    const cartTotal = document.getElementById("cart-total");


    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    }


    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        count += item.quantity;


        const div = document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <strong>${item.name}</strong>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>

            </div>

            <div>

                <button onclick="decreaseItem(${index})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseItem(${index})">
                    +
                </button>

                <button onclick="removeItem(${index})">
                    🗑
                </button>

            </div>

        `;


        cartItems.appendChild(div);

    });


    cartCount.innerText = count;

    cartTotal.innerText = total;

}


// Increase quantity

function increaseItem(index) {

    cart[index].quantity++;

    updateCart();

}


// Decrease quantity

function decreaseItem(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// Open cart

function openCart() {

    document.getElementById("cart-modal").style.display = "block";

}


// Close cart

function closeCart() {

    document.getElementById("cart-modal").style.display = "none";

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });


    alert(
        "Thank you for your order! ☕\n\n" +
        "Your total is ₹" + total +
        "\n\nOrder confirmed!"
    );


    cart = [];

    updateCart();

    closeCart();

}


// ================= MENU FILTER =================

function filterMenu(category) {

    const cards = document.querySelectorAll(".menu-card");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ================= CONTACT FORM =================

function submitForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you " + name +
        "! ❤️\n\n" +
        "Your message has been submitted successfully."
    );


    document.querySelector(".contact-form").reset();

}


// ================= MOBILE MENU =================

function toggleMenu() {

    document
        .querySelector(".nav-links")
        .classList.toggle("active");

}


// ================= CLOSE CART OUTSIDE =================

window.onclick = function(event) {

    const modal =
        document.getElementById("cart-modal");


    if (event.target === modal) {

        closeCart();

    }

};
