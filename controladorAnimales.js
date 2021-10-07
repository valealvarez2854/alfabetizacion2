let vaca1=document.getElementById("vaca1");
let fotovaca1=document.getElementById("fotovaca1");
let vaca2=document.getElementById("vaca2");
let fotovaca2=document.getElementById("fotovaca2");

let leon1=document.getElementById("leon1");
let fotoleon1=document.getElementById("fotoleon1");
let leon2=document.getElementById("leon2");
let fotoleon2=document.getElementById("fotoleon2");

let ballena1=document.getElementById("ballena1");
let fotoballena1=document.getElementById("fotoballena1");
let ballena2=document.getElementById("ballena2");
let fotoballena2=document.getElementById("fotoballena2");

let buho1=document.getElementById("buho1");
let fotobuho1=document.getElementById("fotobuho1");
let buho2=document.getElementById("buho2");
let fotobuho2=document.getElementById("fotobuho2");


let contadorvaca=0;
let contadorleon=0;
let contadorballena=0;
let contadorbuho=0;


vaca1.addEventListener("click",activarvaca1)
vaca2.addEventListener("click",activarvaca2)

leon1.addEventListener("click",activarleon1)
leon2.addEventListener("click",activarleon2)

ballena1.addEventListener("click",activarballena1)
ballena2.addEventListener("click",activarballena2)

buho1.addEventListener("click",activarbuho1)
buho2.addEventListener("click",activarbuho2)


function activarvaca1(){

    console.log("hola")
    vaca1.classList.remove("bg-dark");
    fotovaca1.classList.remove("invisible")
    contadorvaca++;

    setTimeout(function(){

        if(contadorvaca !=2){
            
            vaca1.classList.add("bg-dark");
            fotovaca1.classList.add("invisible")
            contadorvaca--;

        }else{

            let audio=new Audio('audio/vaca.mp3')
            audio.play();

            let resultadovaca1=document.getElementById("resultadovaca");
            resultadovaca1.classList.remove("invisible")
            resultadovaca1.classList.add("visible")

        }

      
    },3000)
}
function activarvaca2(){

    console.log("hola")
    vaca2.classList.remove("bg-dark");
    fotovaca2.classList.remove("invisible")
    contadorvaca++;

    setTimeout(function(){


        if(contadorvaca !=2){
            
            vaca2.classList.add("bg-dark");
            fotovaca2.classList.add("invisible")
            contadorvaca--;
    
            }else{
    
                let audio=new Audio('audio/vaca.mp3')
                audio.play();
                
           let resultadovaca2=document.getElementById("resultadovaca");
           resultadovaca2.classList.remove("invisible")
            resultadovaca2.classList.add("visible")

            }
    

    },3000)
}
function activarleon1(){

    console.log("hola")
    leon1.classList.remove("bg-dark");
    fotoleon1.classList.remove("invisible")
    contadorleon++;

    setTimeout(function(){


        if(contadorleon !=2){
            
            leon1.classList.add("bg-dark");
            fotoleon1.classList.add("invisible")
            contadorleon--;
    
            }else{
    
                let audio=new Audio('audio/leon.mp3')
                audio.play();
                
          
           
            let resultadoleon2=document.getElementById("resultadoleon");
            resultadoleon2.classList.remove("invisible")
            resultadoleon2.classList.add("visible")

            }
    

    },3000)
}
function activarleon2(){

    console.log("hola")
    leon2.classList.remove("bg-dark");
    fotoleon2.classList.remove("invisible")
    contadorleon++;

    setTimeout(function(){


        if(contadorleon !=2){
            
            leon2.classList.add("bg-dark");
            fotoleon2.classList.add("invisible")
            contadorleon--;
    
            }else{
    
                let audio=new Audio('audio/leon.mp3')
                audio.play();
                
          
           
            let resultadoleon2=document.getElementById("resultadoleon");
            resultadoleon2.classList.remove("invisible")
            resultadoleon2.classList.add("visible")

            }
    

    },3000)
}
function activarballena1(){

    console.log("hola")
    ballena1.classList.remove("bg-dark");
    fotoballena1.classList.remove("invisible")
    contadorballena++;

    setTimeout(function(){


        if(contadorballena !=2){
            
            ballena1.classList.add("bg-dark");
            fotoballena1.classList.add("invisible")
            contadorballena--;
    
            }else{
    
                let audio=new Audio('audio/ballena.mp3')
                audio.play();
                
          
           
            let resultadoballena1=document.getElementById("resultadoballena");
            resultadoballena1.classList.remove("invisible")
            resultadoballena1.classList.add("visible")

            }
    

    },3000)
}

function activarballena2(){

    console.log("hola")
    ballena2.classList.remove("bg-dark");
    fotoballena2.classList.remove("invisible")
    contadorballena++;

    setTimeout(function(){


        if(contadorballena !=2){
            
            ballena2.classList.add("bg-dark");
            fotoballena2.classList.add("invisible")
            contadorballena--;
    
            }else{
    
                let audio=new Audio('audio/ballena.mp3')
                audio.play();
                
          
           
            let resultadoballena2=document.getElementById("resultadoballena");
            resultadoballena2.classList.remove("invisible")
            resultadoballena2.classList.add("visible")

            }
    

    },3000)
}
function activarbuho1(){

    console.log("hola")
    buho1.classList.remove("bg-dark");
    fotobuho1.classList.remove("invisible")
    contadorbuho++;

    setTimeout(function(){


        if(contadorbuho !=2){
            
            buho1.classList.add("bg-dark");
            fotobuho1.classList.add("invisible")
            contadorbuho--;
    
            }else{
    
                let audio=new Audio('audio/buho.mp3')
                audio.play();
                
          
           
            let resultadobuho1=document.getElementById("resultadobuho");
            resultadobuho1.classList.remove("invisible")
            resultadobuho1.classList.add("visible")

            }
    

    },3000)
}
function activarbuho2(){

    console.log("hola")
    buho2.classList.remove("bg-dark");
    fotobuho2.classList.remove("invisible")
    contadorbuho++;

    setTimeout(function(){


        if(contadorbuho !=2){
            
            buho2.classList.add("bg-dark");
            fotobuho2.classList.add("invisible")
            contadorbuho--;
    
            }else{
    
                let audio=new Audio('audio/buho.mp3')
                audio.play();
                
          
           
            let resultadobuho2=document.getElementById("resultadobuho");
            resultadobuho2.classList.remove("invisible")
            resultadobuho2.classList.add("visible")

            }
    

    },3000)
}