var articulos = [
    { nombre: "balon", precio: 200, calidad: "nueva"},
    { nombre: "control", precio: 500, calidad: "usado"},
    { nombre: "carro", precio: 1000, calidad: "nueva"},
    { nombre: "muñeca", precio: 100, calidad: "vieja"},
    { nombre: "consola", precio: 900, calidad: "usado"},    
]
var filtro = articulos.filter(function(articulos){
    return articulos.precio <= 600
})
var nombres = articulos.map(function(articulos){
    return articulos.nombre
})
var encontrarCarro = articulos.find (function(articulos){
    return articulos.nombre === "carro"
})
function addObject(){
    articulos.unshift({ nombre: "monitor", precio: 200, calidad: "usado"},
    )
    console.log(articulos)
}
var estudiantes = ["kira", "yatora", "kyon", "simon", "aki", "denji"]
function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}
for (var i = 0; i < estudiantes.length; i++ ){
    saludarEstudiantes(estudiantes[i])
}
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
while (estudiantes.length > 0){
    var estudiante= estudiantes.shift()
    saludarEstudiantes(estudiante)
}
function auto(nombre, costo, calidad){
    this.nombre = nombre
    this.costo = costo
    this.calidad = calidad
}

var edad = 18
var verificacion = edad >= 18 ? "puedes votar" : "no puedes votar";