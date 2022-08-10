
/*Numeros pares entre el numero ingresado y 100*/
let numero = prompt("Ingrese un numero menor a 100")
let resultado = 0;

for(let i = numero ; i < 100 ; i++){
    
    if(i % 2 == 0){
        console.log("Numero par: " + i)
    }
}