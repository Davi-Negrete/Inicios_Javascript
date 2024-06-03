import './style.css'

//////////////////////////////////////////////////////////////////////////////////////////////////
//debugger // ? POR FAVOR DESCOMENTAR EL CÓDIGO QUITANDO EL /* AL INICIO Y AL FINAL DE ESTE, PARA QUE PUEDA FUNCIONAR !

/*

console.warn('PRIMER EJERCICIO')


let nombre = 'Luis David'
console.log(nombre) 

///////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('SEGUNDO EJERCICIO')

const Luis_David = {
    edad: 18,
    estatura: 1.75,
    ciudad: 'Barranquilla',
    estudiante: true,
    descripcion: 'Este es el objeto Luis_David con las variables y sus tipos de datos'
    
}
console.log(Luis_David)


///////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('TERCER EJERCICIO') 

let apellido = 'Negrete'

// 1° FORMA DE CONCATENAR
console.log('Hola, ' + [nombre] + ' ' + [apellido] + ', ' + 'estoy concatenando con +.') 

// 2° FORMA DE CONCATENAR
console.log(`Hola, ${nombre} ${apellido}, estoy concatenando con Template Strings.`)

////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('CUARTO EJERCICIO')

console.log('Operadores Aritméticos')

const num1 = 10
const num2 = 5

console.log('Primer número es 10')
console.log('Segundo número es 5')

console.log('Suma 10 + 5')
const suma = num1 + num2
console.log(suma)

console.log('Resta 10 - 5')
const resta = num1 - num2
console.log(resta)

console.log('Multiplica 10 * 5')
const multiplicacion = num1 * num2
console.log(multiplicacion)

console.log('Divide 10 / 5')
const division = num1 / num2
console.log(division)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn(' QUINTO EJERCICIO')

console.log('Contador')
console.log('Dos formas, mismo resultado')

console.log('Primera forma ++contador y --contador')
let contador = 0
console.log(contador)
console.log(++contador)
console.log(--contador)

console.log('Segunda forma contador++ y contador--')
contador = 0
console.log(contador++)
console.log(contador)
contador--
console.log(contador)

//? Metodo más elaborado del contador, utilizando el GetElementById para combinarlo con HTML Y CSS

// Establezco 0 como valor inicial del Contador

contador = 0

// selecciono el value y los botones

const value = document.getElementById('value')
const btnIncrementar = document.getElementById('incrementar')
const btnDecrementar = document.getElementById('decrementar')
const btnReiniciar = document.getElementById('reiniciar')

// agrego el evento

btnIncrementar.onclick = function(){
    ++contador
    value.innerText = contador
}

btnDecrementar.onclick = function(){
    --contador
    value.innerText = contador
}

btnReiniciar.onclick = function(){
    contador = 0
    value.innerText = contador
    
}

console.log('EL OTRO CONTADOR SE ENCUENTRA EN LA PÁGINA, PARA VERLO FUNCIONAR TERMINA DE RESPONDER A LAS VENTANAS EMERGENTES')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('SEXTO EJERCICIO')

let nombre_usuario = prompt('Ingresa tu nombre')
let bienvenida = alert('Bienvenido/a' + ' ' + nombre_usuario)
console.log(`Bienvenido/a ${nombre_usuario}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('SÉPTIMO EJERCICIO')

const pi = 3.141592
let radio_circulo = parseFloat(prompt('Elige un radio al azar en metros para un círculo'))
let area_circulo = pi * radio_circulo * radio_circulo

alert(`El área del círculo es ${area_circulo} metros cuadrados`)
console.log(`Escogiste un radio de ${radio_circulo} metros`)
console.log(`El área del círculo en este caso es ${area_circulo} metros cuadrados `)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('OCTAVO EJERCICIO')

let grados_Celsius = parseFloat(prompt('Ingrese una temperatura en grados Celsius'))
const formula = (9/5 * grados_Celsius) + 32
let grados_Fahrenheit = formula

alert(`La temperatura en grados Fahrenheit es ${grados_Fahrenheit}`)
console.log(`Escogiste una temperatura de ${grados_Celsius} grados Celsius`)
console.log(`La temperatura escogida es igual a ${grados_Fahrenheit} grados Fahrenheit`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('NOVENO EJERCICIO')

let primer_numero = parseFloat(prompt('Ingrese un primer número'))
let segundo_numero = parseFloat(prompt('Ingrese un segundo número'))
let tercer_numero =  parseFloat(prompt('Ingrese un tercer y ultimo número de esta serie'))

let promedio = (primer_numero + segundo_numero + tercer_numero) / 3

alert(`El Promedio de los tres números anteriores es ${promedio}`)
console.log(`Los números que escogiste fueron ${primer_numero}, ${segundo_numero} y ${tercer_numero}`)
console.log(`El Promedio de estos números es ${promedio}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('DÉCIMO EJERCICIO')

let numero = parseFloat(prompt('Ingresa un número DIFERENTE a CERO'))
let resultado = (numero>0) ? 'El número es POSITIVO' : 'El número es NEGATIVO'


alert(`${resultado}`)
console.log(`El número que ingresaste es ${numero}`)
console.log(resultado)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('DÉCIMO PRIMER EJERCICIO')

let edad = parseFloat(prompt('Ingrese su edad en años'))

if (edad>=18) {
    alert('Eres MAYOR DE EDAD')
    console.log('La edad que ingresaste fue' + ' '  + edad + ' ' + 'años')
    console.log('Eres MAYOR DE EDAD')
} 
else {
    alert('Eres MENOR DE EDAD')
    console.log('La edad que ingresaste fue' + ' '  + edad + ' ' + 'años')
    console.log('Eres MENOR DE EDAD')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('DÉCIMO SEGUNDO EJERCICIO')


let dia_Semana = prompt('Ingrese un número del 1 al 7 \n 1. Uno \n 2. Dos \n 3. Tres \n 4. Cuatro \n 5. Cinco \n 6. Seis \n 7. Siete')

switch (dia_Semana) {
    case '1':
    case 'UNO':
    case 'uno':
    case 'Uno':
        alert(`${dia_Semana} corresponde al día LUNES`)
        console.log(`${dia_Semana} corresponde al día LUNES`)
        break;
    case '2':
    case 'DOS':
    case 'dos':
    case 'Dos':  
        alert(`${dia_Semana} corresponde al  día MARTES`) 
        console.log(`${dia_Semana} corresponde al día MARTES`)
        break;
    case '3':
    case 'TRES':
    case 'tres':
    case 'Tres':  
    alert(`${dia_Semana} corresponde al  día MIÉRCOLES`) 
    console.log(`${dia_Semana} corresponde al día MIÉRCOLES`)
        break;
    case '4':
    case 'CUATRO':
    case 'cuatro':
    case 'Cuatro':
        alert(`${dia_Semana} corresponde al  día JUEVES`) 
        console.log(`${dia_Semana} corresponde al día JUEVES`)
        break;
    case '5':
    case 'CINCO':
    case 'cinco':
    case 'Cinco':
        alert(`${dia_Semana} corresponde al  día VIERNES`) 
        console.log(`${dia_Semana} corresponde al día VIERNES`)
         break;
    case '6':
    case 'SEIS':
    case 'seis':
    case 'Seis':
        alert(`${dia_Semana} corresponde al  día SÁBADO`) 
        console.log(`${dia_Semana} corresponde al día SÁBADO`)
        break;
    case '7':
    case 'SIETE':
    case 'siete':
    case 'Siete':
        alert(`${dia_Semana} corresponde al  día DOMINGO`) 
        console.log(`${dia_Semana} corresponde al día DOMINGO`)
        break;
    default:
         alert('No escogiste ninguno de los números correspondientes')
         console.log('No escogiste ninguno de los números correspondientes')
         break;

}

*/ //? POR FAVOR DESCOMENTAR EL CÓDIGO QUITANDO EL /* PARA QUE PUEDA FUNCIONAR !
