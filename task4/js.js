let sum=0;
for(let i=1; i<=100; i++){
    sum+=i; 
    if(sum <= 100){ 
        document.writeln(sum+"<br>");
    }
    else {
        break;
    }
}
document.writeln("The sum is :" +sum);