import { Item, User } from './part'
import { v4 as uuidv4 } from 'uuid'
let myUuid = uuidv4()
console.log(myUuid)

function createUser(name: string, age: number): User {
    const user = new User(name, age)
    return user;
}
const user1 = createUser('John Doe', 25);
console.log(user1);


function createItem(name: string, price: number, quantity: number, description: string): Item {
    const item = new Item(name, price, quantity, description)
    return item;
}
const item = createItem('milk', 25.99, 4, 'good');
console.log(item);



function runClass(): void{
    // Create a new user
    const user4 = createUser('Mike Doe', 22); 
    console.log(user4);
    // Create 3 items to sell
    const itemA = new Item('juice', 5.06, 2, 'great');
    const itemB = new Item('bread', 6.07, 2, 'scrumptious');
    const itemC = new Item('rice', 9.00, 1, 'tasty');
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
console.log(runClass())

