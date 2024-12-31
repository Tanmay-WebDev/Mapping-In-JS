let numbers = [234 ,  126 , 678 , 987 , 43]

function numberArray(num){
    return num*99
}

var newoutput = numbers.map(numberArray);
document.getElementById("output").innerHTML = newoutput