console.log(
    (function(x, y, op) {
    return eval(`${x} ${op} ${y}`)
})(1, 2, '*')
)