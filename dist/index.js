"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const part_1 = require("./part");
const uuid_1 = require("uuid");
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
function createUser(name, age) {
    const user = new part_1.User(name, age);
    return user;
}
const user1 = createUser('John Doe', 25);
console.log(user1);
function createItem(name, price, quantity, description) {
    const item = new part_1.Item(name, price, quantity, description);
    return item;
}
const item = createItem('milk', 25.99, 4, 'good');
console.log(item);
// function addToCart(item: Item, user: User): void {
//     user.cart.push(item);
// }
// const acart = addToCart(item, user)
// console.log(acart)
// function removeFromCart(item: Item, user: User): void {
//     // Iterate through the user's cart
//     for (let i = user.cart.length - 1; i >= 0; i--) {
//         // Check if the current item in the cart matches the specified item
//         if (user.cart[i].id === item.id) {
//             // Remove the item from the cart
//             user.cart.splice(i, 1);
//         }
//     }
// }
// const rcart = removeFromCart(item, user)
// console.log(rcart)
// function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
//     for (let items of user.cart) {
//         if (items == item) {
//             item.quantity -= quantity
//         }
//     }
// }
// const quantity1 = removeQuantityFromCart(item, user, 4)
// console.log(quantity1)
// function cartTotal(user:User): number {
//     let total = 0;
//     for (const item of user.cart) {
//         total += item.price;
//     }
//     return total;
// }
// function printCart(user: User): void {
//     console.log(user.cart);
// }
// const myCart = printCart(user)
// console.log(myCart)
// import { v4 as uuidv4 } from 'uuid'
// let myUuid = uuidv4()
// console.log(myUuid)
//import { Item, User } from './part'
function runClass() {
    // Create a new user
    const user4 = createUser('Mike Doe', 22);
    console.log(user4);
    // Create 3 items to sell
    const itemA = new part_1.Item('juice', 5.06, 2, 'great');
    const itemB = new part_1.Item('bread', 6.07, 2, 'scrumptious');
    const itemC = new part_1.Item('rice', 9.00, 1, 'tasty');
    // Add Item A to the user's cart
    user4.addToCart(itemA);
    // Print the contents of the user's cart
    console.log(user4.printCart());
    // Add 3 items to the user's cart
    user4.addToCart(itemB);
    user4.addToCart(itemC);
    // Print the contents of the user's cart
    console.log(user4.printCart());
    // Print the total of the user's cart
    console.log(user4.cartTotal());
    // Remove all items from the user's cart
    user4.removeFromCart(itemC);
    user4.removeFromCart(itemA);
    user4.removeFromCart(itemB);
    // Print the contents of the user's cart
    console.log(user4.printCart());
    // Print the total of the user's cart
    console.log(user4.cartTotal());
}
console.log(runClass());
