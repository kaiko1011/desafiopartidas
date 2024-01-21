//Segundo Desafio de logica de programação  

let resultado  
let nivel = ""
function partidasRealizadas(vitorias,derrotas){ 
   return(vitorias - derrotas)
}

resultado = partidasRealizadas(900,5)
console.log("Total de vitorias : " + resultado)
exibirNivel(resultado)

function exibirNivel(poder){
    if(poder <= 10) {
        nivel = "Ferro"       
    }else if(poder >10 && poder <= 20){
        nivel = "Bronze"
    }else if(poder>21 && poder <= 50){
        nivel = "Prata"
    }else if(poder >51 && poder <= 80){
        nivel = "Ouro"
    }else if(poder >81 && poder <= 90){
        nivel = "Diamante"
    }else if(poder >91 && poder <= 100){
        nivel = "Lendario"
    }else {
        nivel = "Imortal"
    }   
    console.log(`O Heroi tem saldo de ${resultado} esta no nivel de ${nivel}`)
}


