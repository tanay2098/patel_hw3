let name=prompt('Enter your name:');
let units=prompt('Enter number of units completed:');

while (units<0){
    units=prompt('Please enter valid units!!:');
}
if(units>=0 && units<=30){
    console.log(`Hello ${name}\n Your grade standing is Freshman`);
}
if(units>=31 && units<=60){
    console.log(`Hello ${name}\n Your grade standing is Sophomore`);
}
if(units>=61 && units<=90){
    console.log(`Hello ${name}\n Your grade standing is Junior`);
}
if(units>=91){
    console.log(`Hello ${name}\n Your grade standing is Senior`);
}
   
