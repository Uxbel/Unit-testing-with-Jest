// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One EURO should be 1.206 DOLLARS", function(){
    // Se importa desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // Se define la función esperada
    const dollars = fromEuroToDollar(3.5)

    // 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // Test comparación
    expect(expected).toBe(dollars);
})

test("One DOLLAR should be 106.58 YENS", function(){
    // Se importa desde app.js
    const { fromDollarToYen } = require('./app.js')

    // Se importa desde app.js
    const yens = fromDollarToYen(1)

    // 1 dolar son 106.58 Yenes
    const expected = 1 * 106.58; 
    
    // Test comparación
    expect(expected).toBe(yens);
})

test("One YEN should be 0.0062 POUNDS", function(){
    // Se importa desde app.js
    const { fromYenToPound } = require('./app.js')

    // Se define la función esperada
    const pounds = fromYenToPound(1)

    // 1 yen son 0.00062 pounds
    const expected = 1 * (0.62/100); 
    
    // Test de comparación
    expect(expected).toBe(pounds);
})