let numeros = new Array(30)

for (var i =0;i<numeros.length; i++){
    numeros[i] = i+23;
}


for (const num of numeros){
    console.log(num)
}