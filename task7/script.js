const products = [
    { id: 1, name: "Мышка", price: 1000 },
    { id: 2, name: "Клавиатура", price: 2000 },
    { id: 3, name: "Наушники", price: 3000 }
];

const cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

function showProducts() {
    productsDiv.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <p>${product.name} - ${product.price} ₽</p>
            <button>Добавить</button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            addToCart(product);
        });

        productsDiv.appendChild(div);
    });
}

function addToCart(product) {
    const item = cart.find(i => i.id === product.id);

    if (item) {
        item.count++;
    } else {
        cart.push({
            ...product,
            count: 1
        });
    }

    showCart();
}

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    showCart();
}

function showCart() {
    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.count;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <p>
                ${item.name}
                (${item.count} шт.)
                - ${item.price * item.count} ₽
            </p>
            <button>Удалить</button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            removeFromCart(item.id);
        });

        cartDiv.appendChild(div);
    });

    totalSpan.textContent = total;
}

showProducts();