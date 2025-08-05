const username = 'Mooshcat';
const password = 'Akuzike'
let num1 = 10;

if(username == 'Mooshcat' && password == 'Akuzike'){
    console.log('You are can enter')
} else{
    console.log('Wrong credentails');
}

console.log(num1 * 2);
console.log(password.length > 8 ? 'Secure password' : 'Short password length');

console.log(`Displaying numbers in decreasing order from ${num1}`)
while(num1 > 1){
    console.log(num1)
    num1--;
}

console.log(`Displaying numbers in an ascending order from ${num1}`)
while(num1 < 20){
    console.log(num1);
    num1++;
}
