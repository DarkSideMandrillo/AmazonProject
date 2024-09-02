import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummery.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
}); //callback


