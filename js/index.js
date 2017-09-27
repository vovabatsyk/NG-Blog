let userNum = Number(prompt('Enter the number of the Fibonacci'));
function fib(n) {
    if (n == 1 || n == 2)
        return 1;
    else
        return fib(n - 2) + fib(n - 1);
}
document.write(fib(userNum));
