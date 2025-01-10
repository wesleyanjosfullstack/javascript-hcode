function calc(x , y, op) {
    return eval(`${x} ${op} ${y}`)
}

let r = calc(1, 2, '+')
console.log(r)
r = calc(1, 2, '*')
console.log(r)