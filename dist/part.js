"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Item = void 0;
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, quantity, description) {
        //assign the properties
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}
exports.Item = Item;
class User {
    constructor(name, age) {
        //assign the properties
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        // Iterate through the user's cart
        for (let i = this.cart.length - 1; i >= 0; i--) {
            // Check if the current item in the cart matches the specified item
            if (this.cart[i].id === item.id) {
                // Remove the item from the cart
                this.cart.splice(i, 1);
            }
        }
    }
    removeQuantityFromCart(item, quantity) {
        for (let items of this.cart) {
            if (items == item) {
                item.quantity -= quantity;
            }
        }
    }
    cartTotal() {
        let total = 0;
        for (const item of this.cart) {
            total += item.price;
        }
        return total;
    }
    printCart() {
        console.log(this.cart);
    }
}
exports.User = User;
