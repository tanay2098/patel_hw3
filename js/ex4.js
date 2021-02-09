
for (let i=1;i<=3;i++) {
        let pwd=prompt('Enter your password:');
        if (pwd=='secret'){
            console.log(`You entered correct password after ${i} attempts`);
            break;
                
        }
        else if(i==3){
            console.log(`Your account is locked! You failed to enter the correct password ${i} times.`);
            break;
        }
                
    }




