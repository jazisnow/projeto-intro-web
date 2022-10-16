//  Semana 01
//  Item escolhido : carros

// //carro 01  
// let carro1 = "Fiesta".toUpperCase()
// let fabricante1 = "Ford".toUpperCase()
// let anoCriacao1 = 2004
// let motor1 = true
// let carroArray1 = ['Quatro portas', 'Ar condicionado', 'Vidro Eletrico'] //Semana 02 , Etapa 1 (Criação de uma array add mais características)
// console.log(//Semana 02 , Etapa 2.a (.toUpperCase() para letras maiúsculas)
//     `carro: ${carro1}\nFabricante: ${fabricante1}\nAno de fabricação: ${anoCriacao1}\nmotor é 1.6: ${motor1}`
// )
// console.log(carroArray1)


// //Carro 02
// let carro2 = "Palio".toUpperCase()
// let fabricante2 = "Fiat".toUpperCase()
// let anoCriacao2 = 2010
// let motor18 = true
// let carroArray2 = ["Teto Solar", "Banco de couro", "Rebaixado", ] //Semana 02 , Etapa 1 (Criação de uma array add mais características)
// console.log(//Semana 02 , Etapa 2.a (.toUpperCase() para letras maiúsculas)
//     `carro: ${carro2}
//     Fabricante: ${fabricante2}
//     Ano de fabricação: ${anoCriacao2}
//     Motor é 1.8: ${motor18}`
// )
// console.log(carroArray2)

// let atributosDoCarro = ""



// // Carro 03
// let carro3 = "Fusca".toUpperCase()
// let fabricante3 = "Volkswagen".toUpperCase()
// let anoCriacao3 = 2012
// let motor20 = true
// let carroArray3 = ["Turbo", "Vidro Elétrico", "Direção Hidraulica"] //Semana 02 , Etapa 1 (Criação de uma array add mais características)
// console.log(//Semana 02 , Etapa 2.a (.toUpperCase() para letras maiúsculas)
//     `carro: ${carro3}
//         \nFabricante: ${fabricante3}\nAno de fabricação: ${anoCriacao3}\nMotor é 2.0: ${motor20}`
// )
// console.log(carroArray3)

//  for (i in carroArray3) {
//      console.log(carroArray3[i])
//  }

//Semana 03 Etapa 1 
// // Carro 01 objeto
// let carro01 = {
//   carro: "Fiesta".toUpperCase(),
//   fabricante: "Ford".toUpperCase(),
//   anoCriacao: 2004,
//   preço: 17.500,
//   motor: true,
//   caracteristicas: ["Quatro portas", "Ar condicionado", "Vidro Eletrico"],
//   relatorio: ""
// }
// console.log(carro01)

// //Semana 03 Etapa 1
// //Carro 02 objeto
// const carro02 = {
//   carro: "Palio".toUpperCase(),
//   fabricante: "Fiat".toUpperCase(),
//   anoCriacao: 2010,
//   preço: 22.900,
//   motor: true,
//   caracteristicas: ["Teto Solar", "Banco de couro", "Rebaixado"],
//   relatorio: ""
// }
// console.log(carro02)

// //Semana 03 Etapa 1 
// //Carro 03 objeto
// const carro03 = {
//   carro: "Fusca".toUpperCase(),
//   fabricante: "Volkswagen".toUpperCase(),
//   anoCriacao: 2020,
//   preço: 106.107,
//   motor: true,
//   caracteristicas: ["Turbo", "Vidro Elétrico", "Direção Hidraulica"],
//   relatorio: ""
// }
// console.log(carro03)

// // Semana 01 Etapa 03 
// const media = (
//   carro01.anoCriacao + carro01.preço
//   + carro02.anoCriacao + carro02.preço
//   + carro03.anoCriacao + carro03.preço) / 3
// console.log('Média dos valores dos anos de fabricação e preços:', media)

// // Semana 01 Etapa 04
// let verificandoBool = carro01.motor && carro02.motor && carro03.motor
// console.log(verificandoBool)

// //Semana 03 etapa 02
// const arrayObjeto = []

// //Semana 04 etapa 02
// carro01.motor === true ? arrayObjeto.push(carro01) : alert("O item 1 não foi adicionado")
// carro02.motor === true ? arrayObjeto.push(carro02) : alert("O item 2 não foi adicionado")
// carro03.motor === true ? arrayObjeto.push(carro03) : alert("O item 3 não foi adicionado")
// console.log(arrayObjeto)

// //Semana 05 etapa 01
// for (let i = 0; i < arrayObjeto.length; i++) {
//   arrayObjeto[i].caracteristicas = arrayObjeto[i].caracteristicas.join(', ')
//   console.log(arrayObjeto[i].caracteristicas)
// }
// //Semana 05 etapa 02
// for (let i in arrayObjeto) {
//   arrayObjeto[i].relatorio = `
//   Nome: ${arrayObjeto[i].carro}
//   Fabricante: ${arrayObjeto[i].fabricante}
//   Ano: ${arrayObjeto[i].anoCriacao}
//   Preço: ${arrayObjeto[i].preço}
//   Motor: ${arrayObjeto[i].motor}
//   Caractristica: ${arrayObjeto[i].caracteristicas}`
//   console.log(arrayObjeto[i].relatorio)
// }

// //Semana 06 etapa 01
// const retornarObjeto = Objeto => {
//   return Objeto.relatorio
// }
// console.log(retornarObjeto(carro01))

// //Semana 06 etapa 01
// const retornarArray = (String, ArrayObj) => {
//   let resposta = []
//   for (let i in ArrayObj) {
//     if (ArrayObj[i].carro === String.toUpperCase()) {
//       resposta.push(ArrayObj[i])
//     }

//   }
//   //Semana 06 etapa 02
//   if (resposta.length > 0) {
//     return resposta
//   } else {
//     alert("Item não encontrado")

//   }

// }
//console.log(retornarArray("Fusca", arrayObjeto))

//Semana 11 Aplicando DOM
const arrayObjeto2 = [
  {
    carro: "Fiesta".toUpperCase(),
    fabricante: "Ford".toUpperCase(),
    anoCriacao: 2004,
    preço: 17.500,
    motor: true,
    caracteristicas: ["Quatro portas", "Ar condicionado", "Vidro Eletrico"],
    imagem: "/ford-fiesta-2004-5975812-1_800X600.jpg",
    link: "https://www.youtube.com/watch?v=5s565paV9Bw",
    relatorio: ""

  },
  {
    carro: "Palio".toUpperCase(),
    fabricante: "Fiat".toUpperCase(),
    anoCriacao: 2010,
    preço: 22.900,
    motor: true,
    caracteristicas: ["Teto Solar", "Banco de couro", "Rebaixado"],
    imagem: "/110386-fiat-palio-20201207143029266421.jpg",
    link: "https://www.youtube.com/watch?v=JPB_jbNCHmQ",
    relatorio: ""
  },
  {
    carro: "Fusca".toUpperCase(),
    fabricante: "Volkswagen".toUpperCase(),
    anoCriacao: 2020,
    preço: 106.107,
    motor: true,
    caracteristicas: ["Turbo", "Vidro Elétrico", "Direção Hidraulica"],
    imagem: "/OIP.jfif",
    link: "https://www.youtube.com/watch?v=bBtwI5mRTYA",
    relatorio: ""
  }
]

//Semana 12 Aplicando DOM
function buscarCarro() {
  const input = document.getElementById("search-txt")
  console.log(input.value)
  const carroEscolido2 = carroEscolido(input)
  test(carroEscolido2)
}
function carroEscolido(input) {
  const carroEscolido = arrayObjeto2.filter((item) => { return item.carro === input.value.toUpperCase() })
  console.log(`${carroEscolido}` ? carroEscolido : alert('Carro não encontrado'))
  if (carroEscolido.length >= 1) {
    return carroEscolido
  } else {
    return arrayObjeto2
  }
}

//Semana 11 Aplicando DOM
function test(array) {
  const itens = document.getElementById("item1")
  itens.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    itens.innerHTML += `
  <ul class='flex'>
  <img src="${array[i].imagem}"alt="">
  <div>
     <a href='${array[i].link}' target="_blank" >${array[i].carro}</a>    
      <li>Ano:${array[i].anoCriacao}</li>
      <li>Preço: ${array[i].preço}</li>
      <li>Parcelamos em até 60x</li>
  </div>
  </ul>
`
  }
}
test(arrayObjeto2)






























