let hrs=parseInt(prompt('Enter hours: '));
let mins=parseInt(prompt('Enter minutes: '));
let sec=parseInt(prompt('Enter seconds: '));
var new_hrs=0;
var new_mins=0;
var new_sec=0;

console.log(`Time input:${hrs}h ${mins}m ${sec}s`);

if(sec==59){
    new_sec=00
}
else{
    new_sec=sec+1
}

if(new_sec==00){
    if(mins==59){
        new_mins=00
    }
    else{
        new_mins=mins+1
    }
}
else{
    new_mins=mins
}


if(new_mins==00){
    if(hrs==23){
        new_hrs=00
    }
    else{
        new_hrs=hrs+1
    }
}
else{
    new_hrs=hrs
}


console.log(`One Second Later: ${new_hrs}h ${new_mins}m ${new_sec}s.`);