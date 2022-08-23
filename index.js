let name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name,event){
    let msg = [] ;
    for(let n=0;n<name.length;n++){
     msg.push(`Thank you, ${name[n]}, for the wonderful ${event} gift!`);
}
return msg;
}



function countDown(num){
    while (num>=0){
        console.log(num);
        num--;
    }
}