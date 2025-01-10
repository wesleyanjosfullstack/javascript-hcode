let color = 'yellow'

if (color === 'green') console.log('Siga em frente !')
else if (color === 'yellow') console.log('Atenção !')
else if (color === 'red') console.log('Pare !')

color = 'green'

switch(color) {
    case 'green':
        console.log('Siga em frente !')
        break
    case 'yellow':
        console.log('Atenção !')
        break
    case 'red':
        console.log('Pare !')
        break
    default:
        console.log('Muita atenção !')
        break
}