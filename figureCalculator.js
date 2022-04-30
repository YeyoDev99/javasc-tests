// triangulo isoseles altura
console.group("isosceles-altura")

function calcularAlturaIsosceles(side1, side2, base){
    if(side1 === side2 && side1 != base){
        const a1 = side1**2
        const b1 = base / 2
        const b2 = b1**2
        const c = a1 - b2
        const isoscelesResult = Math.sqrt(c)
        return isoscelesResult        
    }
    else {
        const trianguloAlturaDenial = document.getElementById("trianguloAlturaDenial")
        trianguloAlturaDenial.innerText = "no es un triangulo isosceles"
    }
}


function alturaIsosceles(){
    const side1Input = document.getElementById("side1")
    const side2Input = document.getElementById("side2")
    const baseInput = document.getElementById("base")
    const side1Value = side1Input.value
    const side2Value = side2Input.value
    const baseValue = baseInput.value
    const altura = calcularAlturaIsosceles(side1Value, side2Value, baseValue)
    const alturaResult = document.getElementById("trianguloAlturaResult")
    alturaResult.innerText = "la altura del triangulo isosceles es " + altura + " cm"
}
console.groupEnd()
// triangulo isosceles area

console.group("isosceles-area")

function calcularAreaIsosceles(side1Area, side2Area, baseArea){
    if(side1Area === side2Area && side1Area != baseArea){
        const a1 = side1Area**2
        const b1 = baseArea / 2
        const b2 = b1**2
        const c = a1 - b2
        const isoscelesResult = Math.sqrt(c)
        const isoscelesResultArea = isoscelesResult * baseArea / 2
        return isoscelesResultArea
    }
    else {
        const trianguloAreaDenial = document.getElementById("trianguloAreaDenial")
        trianguloAreaDenial.innerText = "no es un triangulo isosceles"
    }
}


function areaIsosceles(){
    const side1Input = document.getElementById("side1Area")
    const side2Input = document.getElementById("side2Area")
    const baseInput = document.getElementById("baseArea")
    const side1Value = side1Input.value
    const side2Value = side2Input.value
    const baseValue = baseInput.value
    const area = calcularAreaIsosceles(side1Value, side2Value, baseValue)
    const trianguloAreaResult = document.getElementById("trianguloAreaResult")
    trianguloAreaResult.innerText = "el area del triangulo isosceles es " + area + " cm^2" 
}
console.groupEnd()
// circulo perimetro

console.group("circulo-perimetro")

const PiValue = Math.PI

function calcularPerimetroCirculo(radio){
    const perimetroCirculoResult= radio * 2 * PiValue
    return perimetroCirculoResult
}


function perimetroCirculo(){
    const radioInput = document.getElementById("circleRadio")
    const radioValue = radioInput.value
    const perimetroCirculoResultado = calcularPerimetroCirculo(radioValue)
    const circlePerimetroResult = document.getElementById("circlePerimetroResult")
    circlePerimetroResult.innerText = "el perimetro del circulo es " + perimetroCirculoResultado + " cm" 
}
console.groupEnd()

// circulo area

console.group("circulo-area")

function calcularAreaCirculo(radio){
    const areaCirculoResult= radio**2 * PiValue
    return areaCirculoResult
}


function areaCirculo(){
    const radioInput = document.getElementById("circleArea")
    const radioValue = radioInput.value
    const areaCirculoResultado = calcularAreaCirculo(radioValue)
    const circleAreaResult = document.getElementById("circleAreaResult")
    circleAreaResult.innerText = "el area del circulo es " + areaCirculoResultado + " cm^2" 
}
console.groupEnd()

