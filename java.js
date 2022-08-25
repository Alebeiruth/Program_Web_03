function mostraNumeros(valorInicial) {
    var parada = parseInt(document.getElementById("parada").value);
    for(var i = valorInicial; i <= parada; i+=2) {

        document.getElementById("mostrar").innerHTML += i + "<br>";
        
    }
}
