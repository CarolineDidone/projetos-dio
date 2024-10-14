//Desafio Classificados de nível de Herói

let nomeHeroi = "Carol";
let xpNivel = 50000;

if(xpNivel <= 1000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível FERRO, com pontuação: ${xpNivel}.`);
} else if(xpNivel > 1001 && xpNivel <= 2000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível BRONZE, com pontuação: ${xpNivel}.`);
} else if(xpNivel > 2001 && xpNivel <= 5000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível PRATA, com pontuação: ${xpNivel}.`);
} else if(xpNivel > 5001 && xpNivel <= 7000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível OURO, com pontuação: ${xpNivel}.`);
} else if(xpNivel > 7001 && xpNivel <= 8000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível PLATINA, com pontuação: ${xpNivel}.`);
} else if(xpNivel > 8001 && xpNivel <= 9000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível ASCENDENTE, com pontuação: ${xpNivel}.`);
} else if(xpNivel > 9001 && xpNivel <= 10000){
    console.log(`O Héroi de nome ${nomeHeroi} está no nível IMORTAL, com pontuação: ${xpNivel}.`);
} else{
    console.log(`O Héroi de nome ${nomeHeroi} está no nível RADIANTE, com pontuação: ${xpNivel}.`);
}