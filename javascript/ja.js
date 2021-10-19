let ss=0;
let bb=['https://c.tenor.com/pSTSsdYLga0AAAAd/you-so-funny-youre-so-funny.gif','https://c.tenor.com/pSTSsdYLga0AAAAd/you-so-funny-youre-so-funny.gif','https://c.tenor.com/pSTSsdYLga0AAAAd/you-so-funny-youre-so-funny.gif']

function presser(){
    
    ss++;
    var image=document.createElement('img');
    image.src=('https://c.tenor.com/pSTSsdYLga0AAAAd/you-so-funny-youre-so-funny.gif');
    var div= document.getElementById('flex-box-j');
    if(ss<7){
        div.append(image);
    }
    
}
