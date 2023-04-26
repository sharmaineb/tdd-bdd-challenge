const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle", function() {
  const rectangleArea = utils.area(7,8)
  expect(rectangleArea).to.be.a("number")
  expect(rectangleArea).to.equal(56)
})

it("should return the perimeter of a rectangle", function() {
  const rectanglePerimeter = utils.perimeter(7,8)
  expect(rectanglePerimeter).to.be.a("number")
  expect(rectanglePerimeter).to.equal(30)
})

it("should return the area of a circle with radius", function() {
  const circleArea = utils.circleArea(9)
  expect(circleArea).to.be.a("number")
  expect(circleArea).to.equal(254.47)
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
});

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.deep.include(item)
  expect(cart.length).to.equal(1)
})

it("Should return the number of items in the cart", function() {
  const cart = utils.getShoppingCart()
  const items = utils.getNumItemsInCart()
  expect(items).to.be.a("number")
  expect(cart).to.equal(2)
})

it("Should remove items from cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  expect(utils.getNumItemsInCart()).to.equal(1)
  utils.removeItemFromCart(item)
  expect(utils.getNumItemsInCart()).to.not.deep.include(item)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  const item = utils.createItem("apple", 0.99)
  const cart = utils.getShoppingCart()
  const cartTotal = cart.length
  utils.addItemToCart(item)
  const update = utils.getShoppingCart()
  expect(update.length).to.be.greaterThan(cartTotal) 
})

it("Should validate that an empty cart has 0 items", function() {
  const cart = utils.getShoppingCart()
  expect(cart.length).to.be.equal(0)
})

it("Should return the total cost of all items in the cart", function() {
  const item1 = { name: "apple", price: 0.99, quantity: 1 }
  const item2 = { name: "banana", price: 1.29, quantity: 2 }
  utils.addItemToCart(item1)
  utils.addItemToCart(item2)
  total = item1.price + item2.price 
  expect(totalCost).to.equal(2.28)
})
