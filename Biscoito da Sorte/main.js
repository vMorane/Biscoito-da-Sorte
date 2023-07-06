const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector('#btnTry')


const phrases = [
    'Acredite no seu potencial e conquiste o mundo.',
'O amor é a resposta para todas as perguntas.',
'Pense antes de agir e encontre a paz interior.',
'Aceite a si mesmo com suas qualidades e imperfeições.',
'Grandes realizações começam com pequenos passos.',
'A flexibilidade é a chave para enfrentar os desafios da vida.',
'Cuide não apenas da aparência, mas também do seu coração.',
'Valorize cada momento, pois algumas oportunidades nunca voltam.',
'A juventude é uma atitude que transcende a idade.',
'Colhemos o que plantamos, portanto, escolha sabiamente.',
'Seja um exemplo para seus filhos, pois seu legado é eterno.',
'Aprenda com pessoas boas e seja inspiração para os outros.',
'Nada pode ofuscar a luz do sol, nem mesmo as maiores dificuldades.',
'O bom-senso é uma sabedoria inestimável.',
'Aquele que busca rosas deve estar pronto para enfrentar os espinhos.',
'As melhores lições vêm dos verdadeiros amigos.',
'A empatia é uma virtude valiosa, não um sinal de fraqueza.',
'Encontre força dentro de si mesmo nas adversidades.',
'Aprecie o que você tem, em vez de lamentar o que falta.',
'Uma flor é completa com suas folhas, assim como você é completo com suas qualidades únicas.',
'O entusiasmo é a chama que leva à vitória.',
'Compartilhe risadas, pois elas aproximam as pessoas.',
'Os defeitos se tornam mais evidentes quando o amor é frágil.',
'Amizade e amor se entrelaçam em um instante mágico.',
'O amor é cheio de surpresas encantadoras, deixe-se surpreender.',
'Faça pequenos gestos hoje e conquiste grandes conquistas amanhã.',
'A paciência é um sinal de um coração sensível em tempos difíceis.',
'Prepare sua mente para o sucesso e a sorte estará ao seu lado.',
'A verdadeira clareza vem quando olhamos para o coração.',
'Encontre a sabedoria olhando para dentro de si mesmo.'
  ];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event){
    event.preventDefault()
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}