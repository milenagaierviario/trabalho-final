let menuopcoes = prompt("1. Cadastrar abrigo: \n 2. Listar abrigos: \n 3. Procurar abrigo por cidade: \n 4. Sair")
let abrigos = []

function cadastro () { 
    nome = prompt("Nome do abrigo:")   
    endereco = prompt("Endereço do abrigo:")  
    cidade = prompt("Digite a cidade do abrigo:")
    telefone = Number(prompt("Telefone do abrigo:")) 
    cap = Number(prompt("Capacidade de lotação deste abrigo:"))

const abrigo = {
abrigoS : nome ,
enderecos : endereco ,
metropo : cidade ,
numeros : telefone ,
lotacao : cap
}
abrigos.push(abrigo)
}
 
function listagem () {
for (let lista of abrigos) {
alert(lista)
}
}

function procura () {
cidades = prompt("Qual é a sua cidade?:")
for (let procurar of abrigos) {
alert(procurar)
}
}

while (menuopcoes !== 4) {
    menuopcoes = prompt("1. Cadastrar abrigo: \n 2. Listar abrigos: \n 3. Procurar abrigo por cidade: \n 4. Sair")
    let menu
switch (menuopcoes) {
    case '1': 
        cadastro()
        break
    case '2':
       listagem()
        break
    case '3':
       procura()
        break
    case '4':
        break
}
}
