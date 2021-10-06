let nutricionista2=document.getElementById("nutricionista2");
let fotonutricionista2=document.getElementById("fotonutricionista2");
let nutricionista1=document.getElementById("nutricionista1");
let fotonutricionista1=document.getElementById("fotonutricionista1");
let contadornutricionista=0;

fotonutricionista1.addEventListener("click",activarnutricionista);
nutricionista1.addEventListener("click",activarnutricionista2);

function activarnutricionista(){

    console.log("hicistee clic");
    nutricionista1.classList.remove("bg-dark");
    fotonutricionista1.classList.remove("invisible");
    contadornutricionista++;

  
setTimeout(function () {
    if(contadornutricionista !=2 ){
        nutricionista1.classList.add("bg-dark");
        fotonutricionista1.classList.add("invisible");
        contadornutricionista--;
    }else{
        let audio = new Audio("audio/celebrando.mp3");
        audio.play();
    }
        
    }, 3000)
}
function activarnutricionista2(){

    nutricionista2.classList.remove("bg-dark");
    fotonutricionista2.classList.remove("invisible");
    contadornutricionista2++;

  
    setTimeout(function () {
        if(contadornutricionista2 !=2 ){
            nutricionista2.classList.add("bg-dark");
            fotonutricionista2.classList.add("invisible");
            contadornutricionista2--;
        }else{
            let audio = new Audio("audio/celebrando.mp3");
            audio.play();
        }
            
        }, 3000)
}