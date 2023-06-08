

var box1 = document.getElementById('box-1')
var box2 = document.getElementById('box-2')
var box3 = document.getElementById('box-3')
var box4 = document.getElementById('box-4')
var box5 = document.getElementById('box-5')
var box6 = document.getElementById('box-6')
var box7 = document.getElementById('box-7')
var box8 = document.getElementById('box-8')
var box9 = document.getElementById('box-9')

var para = document.getElementById('para')
//creating a flag 
var flag = true
function Play(el){
    // console.log(el)
    if(flag==true){
        //user first click flag value true
        el.innerHTML="X"
        console.log(el)
        el.classList.add('txt')
        el.classList.add('disableel')
        //change flag value
        flag = false
    }else{
        el.innerHTML="0"
        el.classList.add('txt-zero')
        el.classList.add('disableel')
        flag=true
    }
    

}


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