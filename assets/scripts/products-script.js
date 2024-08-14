document.addEventListener("DOMContentLoaded", (e) => {
    updateCart();
})

class Product {
    constructor (type, id, name, value) {
        this.type = type;
        this.id = id;
        this.code = type + id;
        this.name = name;
        this.value = value;
        this.amount = 1;
    }
}

function addProduct(type, id, name, value) {
    let productExists = false;
    for (let i = 0; i < localStorage.length; i++) {
        var codename = localStorage.key(i);
        let iteratedProduct = JSON.parse(localStorage.getItem(codename));
        console.log(iteratedProduct.code)
        if (iteratedProduct.code == type+id) {
            productExists = true;
            break;
        }
    }
    if (productExists) {
        let iteratedProduct = JSON.parse(localStorage.getItem(codename));
        iteratedProduct.amount++;
        localStorage.setItem(codename, JSON.stringify(iteratedProduct));
    } else {
        let newProduct = new Product(type, id, name, value);
        localStorage.setItem(type + id, JSON.stringify(newProduct));
    }
        updateCart();
}

function decrementProduct(productCode) {
    let product = JSON.parse(localStorage.getItem(productCode));
    if (product.amount > 1) {
        product.amount--;
        localStorage.setItem(productCode, JSON.stringify(product));
    } else {
        localStorage.removeItem(productCode)
    }
    updateCart();
}

function incrementProduct(productCode) {
    let product = JSON.parse(localStorage.getItem(productCode));
    product.amount++;
    localStorage.setItem(productCode, JSON.stringify(product));
    updateCart();
}

function updateCart() {
    document.getElementById("inCart").innerHTML = "";
    let xml = new XMLHttpRequest();
    xml.open('GET', `assets/products/cartItem.html`);
    xml.onreadystatechange = () => {
    if (xml.readyState == 4 && xml.status == 200)  {
        let productAmountTotal = 0;
        for(let i = 0; i < localStorage.length; i++){
            //add cart items (cartItem.html)
            document.getElementById("inCart").innerHTML += xml.responseText;
            //get all the items' images
            let items = document.querySelectorAll(".cartItem > img");
            //get the current code of the product
            let codename = localStorage.key(i);
            //transform the string (json) to an object and store it
            let currentItem = JSON.parse(localStorage.getItem(codename));
            //setting the correct img path for every cart item
            items[i].setAttribute("src", `assets/images/clothes/${currentItem.type}/${currentItem.id}.jpg`);
            
            //update name

            items = document.querySelectorAll(".item-name");
            items[i].innerHTML = currentItem.name;

            //update code

            items = document.querySelectorAll(".remove-item");
            items[i].setAttribute("onclick", `decrementProduct('${currentItem.code}')`);
            items = document.querySelectorAll(".add-item");
            items[i].setAttribute("onclick", `incrementProduct('${currentItem.code}')`);

            //update amount

            items = document.querySelectorAll(".item-amount");
            items[i].innerHTML = currentItem.amount;
            productAmountTotal += parseInt(currentItem.amount);
            //update total value
            
            items = document.querySelectorAll(".item-total");
            items[i].innerHTML = (currentItem.value * currentItem.amount).toFixed(2);
        }
        document.getElementById("counter").innerHTML = productAmountTotal;
    }
            
    }
    xml.send();
}


let btns = document.querySelectorAll(".product-type");

btns.forEach(element => {
    element.addEventListener("click", (e) => {
        changeProducts(element.id);
    })
});

function changeProducts (productType) {
    let xml = new XMLHttpRequest();
    xml.open('GET', `assets/products/${productType}.html`);
    xml.onreadystatechange = () => {

        if (xml.readyState == 4 && xml.status == 200)  {
            document.getElementById("container").innerHTML = xml.responseText;

        } else {
            document.getElementById("container").innerHTML = '<div>An error ocurred. Try again later.</div>';
        }
    }
    xml.send();
}


const dialog = document.querySelector("#modal");
const bag = document.querySelector("#bag");
const closeButton = document.querySelector("#closeBtn");

bag.addEventListener("click", (e) => {
    dialog.showModal();
})

closeButton.addEventListener("click", (e) => {
    dialog.close();
})

