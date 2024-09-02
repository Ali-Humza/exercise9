let random =Math.random()

let a = prompt("enter first number")
let c = prompt("enter operation")
let b = prompt("enter second number")


console.log(typeof(a));

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.1) {
    // perfom correct operations
    console.log(`the result is ${a} ${c} ${b}}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // perfom wrong operations
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}

