let menuopcoes = prompt("1. Cadastrar abrigo: \n 2. Listar abrigos: \n 3. Procurar abrigo: \n 4. Sair")
let abrigos = []

function cadastro () { 
    nome = prompt("Nome do abrigo:")   
    endereco = prompt("Endereço do abrigo:")  
    cidade = prompt("Digite a cidade do abrigo:")
    telefone = Number(prompt("Telefone do abrigo:")) 
    cap = Number (prompt("Capacidade de lotação deste abrigo:"))
const abrigo = {
abrigoS : nome ,
enderecos : endereco ,
metropo : cidade ,
numeros : telefone ,
lotacao : cap
}
abrigos.push(abrigo)
}

 
/*function listagem () {

}*/

function procura () {
prompt("insira nome da cidade")
alert(cidade)
}

let menu
switch (menuopcoes) {
    case '1':
        cadastro()
        break
    case '2':
        alert(abrigos)
        break
    case '3':
        break
    case '4':
        Saiu
        break
}
        Saiu
        break
}
