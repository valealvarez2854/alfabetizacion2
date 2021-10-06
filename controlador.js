let nutricionista1=document.getElementById("nutricionista1");
let fotonutricionista1=document.getElementById("fotonutricionista1");
let nutricionista2=document.getElementById("nutricionista2");
let fotonutricionista2=document.getElementById("fotonutricionista2");

let profesor1=document.getElementById("profesor1");
let fotoprofesor1=document.getElementById("fotoprofesor1");
let profesor2=document.getElementById("profesor2");
let fotoprofesor2=document.getElementById("fotoprofesor2");

let doctor1=document.getElementById("doctor1");
let fotodoctor1=document.getElementById("fotodoctor1");
let doctor2=document.getElementById("doctor2");
let fotodoctor2=document.getElementById("fotodoctor2");

let bombero1=document.getElementById("bombero1");
let fotobomero1=document.getElementById("fotobomero1");
let bombero2=document.getElementById("bombero2");
let fotobombero2=document.getElementById("fotobombero2");


let contadornutricionista=0;
let contadorprofesor=0;
let contadordoctor=0;
let contadorbombero=0;


nutricionista1.addEventListener("click",activarnutricionista1)
nutricionista2.addEventListener("click",activarnutricionista2)

profesor1.addEventListener("click",activarprofesor1)
profesor2.addEventListener("click",activarprofesor2)

doctor1.addEventListener("click",activardoctor1)
doctor2.addEventListener("click",activardoctor2)

bombero1.addEventListener("click",activarbombero1)
bombero2.addEventListener("click",activarbombero2)


function activarnutricionista1(){

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
    
                let audio=new Audio('audio/celebrando.mp3')
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

            let audio=new Audio('audio/celebrando.mp3')
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
    
                let audio=new Audio('audio/celebrando.mp3')
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
    
                let audio=new Audio('audio/celebrando.mp3')
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
    
                let audio=new Audio('audio/celebrando.mp3')
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
    
                let audio=new Audio('audio/celebrando.mp3')
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
    
                let audio=new Audio('audio/celebrando.mp3')
                audio.play();
                
          
           
            let resultadobombero2=document.getElementById("resultadobombero");
            resultadobombero2.classList.remove("invisible")
            resultadobombero2.classList.add("visible")

            }
    

    },3000)
}