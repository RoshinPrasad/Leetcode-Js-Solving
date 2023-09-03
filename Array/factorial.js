function factorial(num) {
    let result=1
    for (i = 2; i<=num ; i++) {
        result = result * i 
    }
    return result
}



console.log(factorial(5))