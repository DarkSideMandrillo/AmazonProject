import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummery.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart-class.js";
//import '../data/cart-class.js';

async function loadPage() {
    await loadProductsFetch(); // possiamo usare await sono nelle async func

    const value = await new Promise((resolve) => { // Await funziona solo con un return promise (loadProductsFetch usa fetch e ritorna)
        loadCart(() => { // Come loadProducts
            resolve('value'); // non serve nulla, ma in questo caso non ca sul then ma è un return
        });
    })
    //  function prova(){await loadProductsFetch();} // Await così non funziona

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();

/*
Promise.all([//Crea 2 thread eseguiti nello stesso momento
    loadProductsFetch(),
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
*/

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


