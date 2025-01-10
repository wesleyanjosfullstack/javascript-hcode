let calc = (x, y, op) => {
    return eval(`${x} ${op} ${y}`)
}

console.log(calc(5, 2, '*'))