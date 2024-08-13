var pais = "brasil";
if (pais != "brasil") {
    console.log("estrangeiro");
}

else{
    console.log ("vc é brasileiro")
}

var idade = 22;
if (idade < 16) {
    console.log ("vc nao vota")
} else if (idade < 18 || idade > 65) {
    console.log ("voto opcional")
} else {
    console.log ("voto obrigatorio")
}