function addToCart(productName="elma",quantity) {
    console.log("Sepete eklendi : ürün : " + productName +" adet : " + quantity )
}

addToCart("elma")
addToCart("karpuz",15)
addToCart(10)


let sayHello = ()=>{
    console.log("Hello world!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",6,10)
addToCart2("armut",3,20)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

