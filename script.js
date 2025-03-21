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
} else if (color === 'red' ) {
    console.log('pare !')
}

color = 'blue'

switch (color) {
    case 'green':
        console.log('siga !')
        break
    case 'yellow':
        console.log('atenção !')
        break
    case 'red':
        console.log('pare !')
        break
    default:
        console.log('não sei !')
}

let n = 5

for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i * n}`)
}