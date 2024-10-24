//criar duas variaveis que recbem o nome e o xp do heroi!

let nomeHeroi = "   Batman"
let xpDoHeroi = "4000"

//utilizar uma estrutura de dados para apresentar algumas mensagens!

let categoria
if (xpDoHeroi <= 1000) {categoria = "ferro";}
else if ( xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {categoria = "Bronze";}
else if ( xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {categoria = "Prata";}
else if ( xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {categoria = "Ouro";}
else if ( xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {categoria = "Platina";}
else if ( xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {categoria = "Ascendente";}
else if ( xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {categoria = "Imortal";}
else if ( xpDoHeroi >= 10001) {categoria = "Radiante";}

//exiba na tela os dados de saida

console.log ("O Herói de nome" + nomeHeroi +" está no nível de "+ categoria +"!")