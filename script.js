var hello = 'Hello world !'
console.log(hello)

let a = 10
const b = '10'
console.log(a == b && typeof b == 'string')
console.log(a == b && typeof a == 'string')
console.log(a == b || typeof a == 'string')

let color = 'yellow'

if (color === 'green') {
    console.log('siga !')
} else if (color === 'yellow') {
    console.log('atenção !')
} else {
    console.log('pare !')
}