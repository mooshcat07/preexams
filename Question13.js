const seconds = window.prompt('Enter seconds');

if(isNaN(seconds)){
    window.alert(`${seconds} is not a number`)
} else{
    const minute = seconds / 60;
    
    window.alert(`${seconds} seconds = ${minute} minutes`)
}