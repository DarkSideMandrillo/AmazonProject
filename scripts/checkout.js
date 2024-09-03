import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummery.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart-class.js";
//import '../data/cart-class.js';

Promise.all([//Crea 2 thread eseguiti nello stesso momento
    new Promise((resolve) => {
        loadProducts(() => { // ricordiamo che loadproducts chiede il passaggio di una func e la esegue alla fine
            resolve('value1'); // Il resolve richiama il .then
        });
    }),
    new Promise((resolve) => {
        loadCart(() => { // Come loadProducts
            resolve();
        });
    })

]).then((value) => {
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});


// new Promise((resolve) => { //Crea thread
//     loadProducts(() => { // ricordiamo che loadproducts chiede il passaggio di una func e la esegue alla fine
//         resolve('value1'); // Il resolve richiama il .then
//     });

// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//         loadCart(() => { // Come loadProducts
//             resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// }); //callback. Puo causare un multiply of nesting come nell'esempio


