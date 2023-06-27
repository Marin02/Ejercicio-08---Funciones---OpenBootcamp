// Ejercicio 08

function miTrue() {
    console.log(true)
}

miTrue()

function asincrona() {
    setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000)
} 

asincrona()

function* paresAutomaticos() {
    let indicePar = -1;
    while(true) {
        indicePar++
        if (indicePar === 20) {
            return indicePar
        }
        yield indicePar++
    }
}

const num = paresAutomaticos();

console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)



