import { v4 as uuidv4 } from 'uuid'
class Item {
    id: string
    name: string
    price: number
    quantity: number
    description: string


    constructor(name: string, price: number, quantity: number, description: string) {
        //assign the properties
        this.id = uuidv4()
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description

    }


}
class User {
    id: string
    name: string
    age: number
    cart: Item[]


    constructor(name: string, age: number) {
        //assign the properties
        this.id = uuidv4()
        this.name = name
        this.age = age
        this.cart = []

    }
    addToCart(item: Item): void {
        this.cart.push(item);
    }

    // static loginInUser(): User | null | undefined {
    //     const name = /* retrieve name from HTML input field */;
    //     const age = /* retrieve age from HTML input field */;

    //     if (name && age) {
    //         return new User(name, age);
    //     } else {
    //         return null;
    //     }
    // }


    removeFromCart(item: Item): void {
        // Iterate through the user's cart
        for (let i = this.cart.length - 1; i >= 0; i--) {
            // Check if the current item in the cart matches the specified item
            if (this.cart[i].id === item.id) {
                // Remove the item from the cart
                this.cart.splice(i, 1);
            }
        }
    }

    removeQuantityFromCart(item: Item, quantity: number): void {
        for (let items of this.cart) {
            if (items == item) {
                item.quantity -= quantity
            }
        }
    }

    // addRemoveEventListeners() {
    // Add event listeners to your cart's Remove One/Remove All Buttons
    // Use the previously built removeQuantityFromCart and removeFromCart functions

    // Example code:
    //     const removeOneButton = document.getElementById('removeOneButton');
    //     const removeAllButton = document.getElementById('removeAllButton');

    //     removeOneButton.addEventListener('click', this.removeQuantityFromCart);
    //     removeAllButton.addEventListener('click', removeFromCart);
    // }


    cartTotal(): number {
        let total = 0;
        for (const item of this.cart) {
            total += item.price;
        }
        return total;
    }

    printCart(): void {
        console.log(this.cart);
    }


}






export { Item, User }