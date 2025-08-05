let sum = 0;
const maximum = 200;

for(let increment=0; increment <= maximum; increment++){
    if(increment % 10 == 0) {
        sum+=increment;
    }
}
console.log(sum);