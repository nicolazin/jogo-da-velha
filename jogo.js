const celulas= document.querySelector(".celula");

let checarTurno = true;

let turno; 

const JOGADOR_X = "X"
const JOGADOR_0 = "0"

let jogoAcabou = false; 

document.addEventListener("click", (event) =>  {
    if (event.target.matches(".celula") && !jogoAcabou) {
        jogar(event.target.id);
    }
    
});

function jogar(id) {

    const celula = document.getElementById(id);
    if (celula.textContent === "") {
        turno = checarTurno ? JOGADOR_X : JOGADOR_0
        checarTurno = !checarTurno;
        celula.textContent = turno;
        celula.classList.add(turno);
        celula.removeEventLitener("click", jogar );
        verificarVencedor(turno);
    }
}
