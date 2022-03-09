function powersOfTwo(n){
    let myArr = []
    // let squaredNumber = Math.pow(2,n);
    // let myNum = n;
    for (var i = 0; i <= n; i++){
        myArr.push(Math.pow(2,i));
        // myNum = myNum + 1;
    }
    // return squaredNumber;
    // return []
    return myArr;
}

console.log(powersOfTwo(0)); // return [1]
console.log(powersOfTwo(1)); // return [1, 2]
console.log(powersOfTwo(4)); // return [1, 2, 4, 8, 16]