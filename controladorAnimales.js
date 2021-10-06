let vaca1=document.getElementById("vaca1");
let fotovaca1=document.getElementById("fotovaca1");
let vaca2=document.getElementById("vaca2");
let fotovaca2=document.getElementById("fotovaca2");

let leon1=document.getElementById("leon1");
let fotoleon=document.getElementById("fotoleon1");
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
    nutricionista1.classList.remove("bg-dark");
    fotonutricionista1.classList.remove("invisible")
    contadornutricionista++;

    setTimeout(function(){

        if(contadornutricionista !=2){
            
            nutricionista1.classList.add("bg-dark");
            fotonutricionista1.classList.add("invisible")
            contadornutricionista--;

        }else{

            let audio=new Audio('audio/celebrando.mp3')
            audio.play();

            let resultadonutricionista1=document.getElementById("resultadonutricionista");
            resultadonutricionista1.classList.remove("invisible")
            resultadonutricionista1.classList.add("visible")

        }

      
    },3000)
}
function activarnutricionista2(){

    console.log("hola")
    nutricionista2.classList.remove("bg-dark");
    fotonutricionista2.classList.remove("invisible")
    contadornutricionista++;

    setTimeout(function(){


        if(contadornutricionista !=2){
            
            fotonutricionista2.classList.add("bg-dark");
            fotonutricionista2.classList.add("invisible")
            contadornutricionista--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
           let resultadonutricionista2=document.getElementById("resultadonutricionista");
            resultadonutricionista2.classList.remove("invisible")
            resultadonutricionista2.classList.add("visible")

            }
    

    },3000)
}
function activarprofesor1(){

    console.log("hola")
    profesor1.classList.remove("bg-dark");
    fotoprofesor1.classList.remove("invisible")
    contadorprofesor++;

    setTimeout(function(){

        if(contadorprofe !=2){
            
            profesor1.classList.add("bg-dark");
            fotoprofesor1.classList.add("invisible")
            contadorprofesor--;

        }else{

            let audio=new Audio('audio/audio.mp3')
            audio.play();

            let resultadoprofesor1=document.getElementById("resultadoprofesor");
            resultadoprofesor1.classList.remove("invisible")
            resultadoprofesor1.classList.add("visible")

        }

      
    },3000)
}
function activarprofesor2(){

    console.log("hola")
    profesor2.classList.remove("bg-dark");
    fotoprofesor2.classList.remove("invisible")
    contadorprofesor++;

    setTimeout(function(){


        if(contadorprofesor !=2){
            
            profesor2.classList.add("bg-dark");
            fotoprofesor2.classList.add("invisible")
            contadorprofesor--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
          
           
            let resultadoprofesor2=document.getElementById("resultadoprofesor");
            resultadoprofesor2.classList.remove("invisible")
            resultadoprofesor2.classList.add("visible")

            }
    

    },3000)
}
function activardoctor1(){

    console.log("hola")
    doctor1.classList.remove("bg-dark");
    fotodoctor1.classList.remove("invisible")
    contadordoctor++;

    setTimeout(function(){


        if(contadordoctor !=2){
            
            doctor1.classList.add("bg-dark");
            fotodoctor1.classList.add("invisible")
            contadordoctor--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
          
           
            let resultadoprofesor2=document.getElementById("resultadodoctor");
            resultadoprofesor2.classList.remove("invisible")
            resultadoprofesor2.classList.add("visible")

            }
    

    },3000)
}

function activardoctor2(){

    console.log("hola")
    doctor2.classList.remove("bg-dark");
    fotodoctor2.classList.remove("invisible")
    contadordoctor++;

    setTimeout(function(){


        if(contadordoctor !=2){
            
            doctor2.classList.add("bg-dark");
            fotodoctor2.classList.add("invisible")
            contadordoctor--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
          
           
            let resultadodoctor2=document.getElementById("resultadodoctor");
            resultadodoctor2.classList.remove("invisible")
            resultadodoctor2.classList.add("visible")

            }
    

    },3000)
}
function activarbombero1(){

    console.log("hola")
    bombero1.classList.remove("bg-dark");
    fotobomero1.classList.remove("invisible")
    contadorbombero++;

    setTimeout(function(){


        if(contadorbombero !=2){
            
            bombero1.classList.add("bg-dark");
            fotobomero1.classList.add("invisible")
            contadorbombero--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
          
           
            let resultadobombero1=document.getElementById("resultadobombero");
            resultadobombero1.classList.remove("invisible")
            resultadobombero1.classList.add("visible")

            }
    

    },3000)
}
function activarbombero2(){

    console.log("hola")
    bombero2.classList.remove("bg-dark");
    fotobombero2.classList.remove("invisible")
    contadorbombero++;

    setTimeout(function(){


        if(contadorbombero !=2){
            
            bombero2.classList.add("bg-dark");
            fotobombero2.classList.add("invisible")
            contadorbombero--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
          
           
            let resultadobombero2=document.getElementById("resultadobombero");
            resultadobombero2.classList.remove("invisible")
            resultadobombero2.classList.add("visible")

            }
    

    },3000)
}