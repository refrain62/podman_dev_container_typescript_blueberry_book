{
    for(let i = 1; i <= 100; i++) {
        if(     i % 3 === 0
            &&  i% 5 === 0 
            ) {
                // console.log("FizzBuzz");
                process.stdout.write("FizzBuzz ");
        } else if( i % 3 === 0) {
            // console.log("Fizz");
            process.stdout.write("Fizz ");
        } else if (i % 5 === 0) {
            // console.log("Buzz");
            process.stdout.write("Buzz ");
        } else {
            // console.log(i);
            process.stdout.write("" + i + " ");
        }
    }
}