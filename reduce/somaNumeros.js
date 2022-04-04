function somaNumeros(arr) {
    return arr.reduce(function (prev, current){
        return prev + current;
    }, 0);
}

const arr = [1, 3];

console.log(somaNumeros(arr));
