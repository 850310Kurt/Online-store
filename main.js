 let carts = document.querySelectorAll('.add-cart');

 let products = [{
         name: "Faux-leather shirt - black",
         tag: "Fauxleathershirt",
         price: 1599,
         inCart: 0
     },
     {
         name: "Ruffled cotton blouse",
         tag: "Ruffledcottonblouse",
         price: 899,
         inCart: 0
     },
     {
         name: "Satin shirt",
         tag: "Satinshirt",
         price: 899,
         inCart: 0
     },
     {
         name: "Leather-effect elastic waist trousers",
         tag: "Leathereffectelasticwaisttrousers",
         price: 599,
         inCart: 0
     },
     {
         name: "Check suit blazer",
         tag: "Checksuitblazer",
         price: 1419,
         inCart: 0
     },
     {
         name: "Houndstooth jacket",
         tag: "Houndstoothjacket",
         price: 1999,
         inCart: 0
     },
     {
         name: "Flowy shirt",
         tag: "Flowyshirt",
         price: 999,
         inCart: 0
     },
     {
         name: "Oversize check shirt",
         tag: "Oversizecheckshirt",
         price: 699,
         inCart: 0
     }
 ];

 for (let i = 0; i < carts.length; i++) {
     carts[i].addEventListener('click', () => {
         cartNumbers(products[i]);
         totalCost(products[i])
     })
 }

 function onloadCartNumbers() {
     let productNumbers = localStorage.getItem('cartNumbers');

     if (productNumbers) {
         document.querySelector('.cart span').textContent = productNumbers;
     }
 }

 function cartNumbers(product) {
     let productNumbers = localStorage.getItem('cartNumbers');

     productNumbers = parseInt(productNumbers);

     if (productNumbers) {
         localStorage.setItem('cartNumbers', productNumbers + 1);
         document.querySelector('.cart span').textContent = productNumbers + 1;
     } else {
         localStorage.setItem('cartNumbers', 1);
         document.querySelector('.cart span').textContent = 1;
     }
     setItems(product);
 }

 function setItems(product) {
     let cartItems = localStorage.getItem('productsInCart');
     cartItems = JSON.parse(cartItems);

     if (cartItems != null) {

         if (cartItems[product.tag] == undefined) {
             cartItems = {
                 ...cartItems,
                 [product.tag]: product
             }
         }
         cartItems[product.tag].inCart += 1;

     } else {
         product.inCart = 1;
         cartItems = {
             [product.tag]: product
         }
     }

     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
 }

 onloadCartNumbers();

 /*When an item is added, an alert should tell the user what the current total
 is.*/
 function totalCost(product) {
     let cartCost = localStorage.getItem('totalCost');

     alert('Your cart total is ' + cartCost)

     if (cartCost != null) {
         cartCost = parseInt(cartCost);

         localStorage.setItem('totalCost', cartCost + product.price);
     } else {
         localStorage.setItem('totalCost', product.price);
     }
 }

 /*Create a “confirm order” button which alerts the user that their order was
 successful and generates them a reference number (keyword: generate)*/
 function confirmOrder() {
     let random = Math.floor((Math.random() * 10000000) + 1);
     alert('Your order is successful! Order number: DA' + random);
     }


  