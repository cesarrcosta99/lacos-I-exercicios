let usuario=prompt("Você deseja comer mais coxinhas? \n S=sim \n N=não").toUpperCase()
let conta=2.50
  while(usuario !== "N"){
    if(usuario === "S") {
      conta+=2.50
}else{
    console.log("Digite S=sim ou N=não")
}
    usuario=prompt("Você deseja comer mais coxinhas? \n S=sim \n N=não").toUpperCase()
  }
  console.log(`O valor da conta foi ${conta}`)