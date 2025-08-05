const user = 'Admin';
const Name = 'Eve'

if(Name != null){
    switch(user){
        case 'Admin':
            console.log(`Welcome back Admin, ${Name}`)
            break;
        case 'User':
            console.log(`Welcome back User, ${Name}`)
            break;
        case 'Guest':
            console.log(`Welcome back Guest, ${Name}`)
            break;
        default:
            console.log(`Invalid user!!!`);
    }

}else{
    console.log('Please enter your name');
}
