// à partir de deux variables (int) qui peuvent changer n'importe quand, créer une condition qui permet d'afficher dans
// la console le plus petit des deux nombres.
// si les nombres sont identique, afficher : "C'est les mêmes !!"


let num1 = 23;
let num2 = 20;
if(num1<num2){
    console.log("num1 est plus petit")
} else if(num1>num2){
    console.log('num2 est plus petit'); 
}else{
    console.log('c`est les mêmes');  
}