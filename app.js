// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    //El valor del yen en base al dolar 
    let valueInYen = valueInDollar * 106.58;
    //return the doller value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    //El valor del yen en base a la libra 
    let valueInPound = valueInYen * (0.62/100);
    //return the doller value
    return valueInPound;
}



// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}