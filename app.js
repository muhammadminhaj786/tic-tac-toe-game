

var box1 = document.getElementById('box-1')
var box2 = document.getElementById('box-2')
var box3 = document.getElementById('box-3')
var box4 = document.getElementById('box-4')
var box5 = document.getElementById('box-5')
var box6 = document.getElementById('box-6')
var box7 = document.getElementById('box-7')
var box8 = document.getElementById('box-8')
var box9 = document.getElementById('box-9')

var match ;

var para = document.getElementById('para')
//creating a flag 
var flag = true
function Play(el){
    // console.log(el)
    if(flag==true){
        //user first click flag value true
        el.innerHTML="X"
        // console.log(el)
        el.classList.add('txt')
        el.classList.add('disableel')
        //change flag value
        flag = false
    }else{
        el.innerHTML="O"
        el.classList.add('txt-zero')
        el.classList.add('disableel')
        flag=true
    }
    if ((box1.innerHTML=="O") && ( box2.innerHTML=="O") && (box3.innerHTML=="O")
    || ((box1.innerHTML=="O") && (box4.innerHTML=="O") && (box7.innerHTML=="O"))
    || ((box2.innerHTML=="O") && ( box5.innerHTML=="O") && (box8.innerHTML=="O")) 
    || ((box3.innerHTML=="O") && ( box6.innerHTML=="O") && (box9.innerHTML=="O")) 
    || ((box4.innerHTML=="O") && ( box5.innerHTML=="O") && (box6.innerHTML=="O"))
    || ((box7.innerHTML=="O") && ( box8.innerHTML=="O") && (box9.innerHTML=="O"))
    || ((box1.innerHTML=="O") && ( box5.innerHTML=="O") && (box9.innerHTML=="O"))
    || ((box7.innerHTML=="O") && ( box5.innerHTML=="O") && (box3.innerHTML=="O"))) {
        box6.classList.add('disableel')
        box7.classList.add('disableel')
        box8.classList.add('disableel')
        box9.classList.add('disableel')
        box5.classList.add('disableel')
        box4.classList.add('disableel')
        box3.classList.add('disableel')
        box2.classList.add('disableel')
        box1.classList.add('disableel')
        console.log('O has won')
        
    }else if ((box1.innerHTML=="X") && ( box2.innerHTML=='X') && (box3.innerHTML=='X')
    || ((box1.innerHTML=="X") && (box4.innerHTML=="X") && (box7.innerHTML=="X"))
    || ((box2.innerHTML=="X") && ( box5.innerHTML=='X') && (box8.innerHTML=='X')) 
    || ((box3.innerHTML=="X") && ( box6.innerHTML=='X') && (box9.innerHTML=='X')) 
    || ((box4.innerHTML=="X") && ( box5.innerHTML=='X') && (box6.innerHTML=='X'))
    || ((box7.innerHTML=="X") && ( box8.innerHTML=='X') && (box9.innerHTML=='X'))
    || ((box1.innerHTML=="X") && ( box5.innerHTML=='X') && (box9.innerHTML=='X'))
    || ((box7.innerHTML=="X") && ( box5.innerHTML=='X') && (box3.innerHTML=='X'))) {
        box6.classList.add('disableel')
        box7.classList.add('disableel')
        box8.classList.add('disableel')
        box9.classList.add('disableel')
        box5.classList.add('disableel')
        box4.classList.add('disableel')
        box3.classList.add('disableel')
        box2.classList.add('disableel')
        box1.classList.add('disableel')
        console.log('X has won')
    }else{
        match = "Tied"
    }

}
console.log(match)

//Creating a timer
var mint = document.querySelector('.mint')
var sec = document.querySelector('.sec')
var interval;
var Mint = 2
var Sec = 60

function timer(){
    Sec--
    sec.innerHTML=Sec
    if(Sec<=0){
        Mint--
        Sec=60
        mint.innerHTML=Mint
    }else if(Mint<=0){
        mint.innerHTML="00"
        sec.innerHTML="00"
        clearInterval(interval)
    }
}

function startTimer(){
    interval = setInterval(timer,1000)
}
