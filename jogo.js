const celulas= document.querySelector(".celula");

let checarTurno = true;

let turno; 

const JOGADOR_X = "X"
const JOGADOR_0 = "0"

let jogoAcabou = false; 

document.addEventListener("click", (event) => ) {
    if (event.target.matches(".celula") && !jogoAcabou) {
        !jogar(event.target.id);
    }
    
});
