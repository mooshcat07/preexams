const maximum = 100;

for(let incrementer = 0; incrementer <= maximum; incrementer++){

    if(incrementer % 3 == 0 && incrementer % 5 == 0){
        console.log('FizzBuzz')
    }
    else if(incrementer % 3 == 0){
        console.log('Fizz');
    }
    else if(incrementer % 5 == 0) {
        console.log('Buzz');
    } else{
        console.log(incrementer);
    }
}