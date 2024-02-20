let NomeDoHeroi = 'DarkHero'
let NivelDoHeroi = 10001

if (NivelDoHeroi <= 1000) {
  NivelDoHeroi = "Ferro";
} else if (NivelDoHeroi >= 1001 && NivelDoHeroi < 2001 ) {
  NivelDoHeroi = "Bronze";
} else if (NivelDoHeroi >= 2001 && NivelDoHeroi < 5001 ) {
  NivelDoHeroi = "Prata";
} else if (NivelDoHeroi >= 5001 && NivelDoHeroi < 7001 ) {
  NivelDoHeroi = "Ouro";
} else if (NivelDoHeroi >= 7001 && NivelDoHeroi < 8001 ) {
  NivelDoHeroi = "Platina";
} else if (NivelDoHeroi >= 8001 && NivelDoHeroi < 9001 ) {
  NivelDoHeroi = "Ascendente";
} else if (NivelDoHeroi >= 9001 && NivelDoHeroi < 10001 ) {
  NivelDoHeroi = "Imortal";
} else {
  NivelDoHeroi = "Radiante";
}

console.log(
  'O Heroi de nome ' + NomeDoHeroi + ' está no nível de ' + NivelDoHeroi
)
