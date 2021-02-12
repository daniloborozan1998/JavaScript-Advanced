$(document).ready(function() {

    let div = $("#nav");

    let factorial = (x) => {


        if (x == 0) {
            return 1;
        } else {
            return x * factorial(x - 1);
        }
    }


    const num = prompt('Enter a positive number: ');


    if (num >= 0) {
        const result = factorial(num);
        div.after(`<h1>The factorial of ${num} is ${result}</h1>`);
    } else {
        div.after('<h1>Enter a positive number.</h1>');
    }




});