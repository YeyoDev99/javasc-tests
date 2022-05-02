// media aritmetica

function mediaAritmetica (lista){
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, valorSumado){
            return valorAcumulado + valorSumado
        }
    )
    const divisionSuma = sumaLista / lista.length
    return divisionSuma
}

function showMediaAritmetica (){
    const listaInput = document.getElementById("promedioInput")
    const listaValue = listaInput.value
    const promedioAritmeticoCalculo = mediaAritmetica(listaValue.split(',').map(Number))
    const promedioReturn= document.getElementById("promedioReturn")
    promedioReturn.innerText = "la media aritmetica de su lista es de " + promedioAritmeticoCalculo
}
// mediana

function mediana (lista){
    var halfLista= parseInt(lista.length / 2)
    function  validacionPar(lista){
        if (lista.length % 2 === 0){
            return true
        }
        else {
            return false
        }
    }
        if (validacionPar(lista)){
            const elemento1 = lista[halfLista-1]
            const elemento2 = lista[halfLista]
            const promedioMediana = mediaAritmetica([elemento1, elemento2])
            return promedioMediana
        }
        else {
            const inparMediana = lista[halfLista]
            return inparMediana
        }
}
function showMediana(){
    const listaInputMediana = document.getElementById("medianaInput")
    const listaValueMediana = listaInputMediana.value
    const calcularMediana = mediana(listaValueMediana.split(',').map(Number).sort(function(a, b){return a - b}))
    const returnMediana = document.getElementById("medianaReturn")
    returnMediana.innerText= "la mediana de su lista es " + calcularMediana
}

// moda

function moda (lista){
    const listaObject = {}
    lista.map (
        function(elemento){
            if (listaObject[elemento]){
                listaObject[elemento] = listaObject[elemento] + 1
            } else {
                listaObject[elemento] = 1
            }
        }
    )
    const listaDefinitiva = Object.entries(listaObject).sort(function(a, b){ return a[1] - b[1] })
    const modaCalculo = listaDefinitiva[listaDefinitiva.length - 1 ]
    return modaCalculo[0]
}

function showModa(){
    const listaInputModa = document.getElementById("modaInput")
    const listaValueModa = listaInputModa.value
    const calcularModa = moda(listaValueModa.split(',').map(Number).sort(function(a , b){return a - b}))
    const returnModa = document.getElementById("modaReturn")
    returnModa.innerText = "la moda de su lista es " + calcularModa
}