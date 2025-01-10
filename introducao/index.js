let smartphone = function() {
    this.color = 'silver'

    this.on = function() {
        console.log('1 Ligação !')
        return 'Ligando !'
    }
}

let obj = new smartphone()
console.log(obj)
console.log(obj.color)
console.log(obj.on())