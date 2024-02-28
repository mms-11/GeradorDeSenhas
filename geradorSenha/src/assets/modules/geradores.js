


//função de gerar numero aleatorio
 function aleatorio(min, max){
    //retora sempre um inteiro por causa de math.floor
    return Math.floor(Math.random()*(max-min) + min);
};

//converter simpolos da tabela asc para String
//48-57 ->Números
const gerarNumero = () =>{
    return String.fromCharCode(aleatorio(48,57));
}
 //letras maiusculas na tabela asc : 65 -> 91
 //converte o valor da tabela asc em string
const geraMaiuscula = () => String.fromCharCode(aleatorio(65,91));

//letras minúsculas na tabela asc: 61->88
const geraMinuscula = () =>{
    return String.fromCharCode(aleatorio(91,123));
}

//caracteres especiais não estão em sequência na tabela asc, por isso vamos forçar uma sequencia num vetor
const caracteresEspeciais = ',.;[]{}!@#$%*()_+=-';
const geraCaracteresEspeciais = () =>{
    const simbolo = caracteresEspeciais[aleatorio(0,caracteresEspeciais.length)];
    return simbolo;
};

 export default function gerarSenha(qtd,maiusculas,minuscula,numeros,caracEspeciais){

    const senhaArray = []; //inicialmente um veotr para adicionar caractere a cada laço
    qtd = Number(qtd);


    //qtd -> qtd de caracteres da senha
    //restante dos atributos são um boolean se vai estar presente ou não na senha 

    for(let i = 0; i < qtd; i++){
        if(maiusculas) senhaArray.push(geraMaiuscula());
        if(minuscula) senhaArray.push(geraMinuscula());
        if(numeros)  senhaArray.push(gerarNumero());
        if(caracEspeciais) senhaArray.push(geraCaracteresEspeciais());
    }
    //agora falta transformar o vetor em string com join('')
    //depois falta dividir a senha na quantidade exigida pelo usuário com slice

    return senhaArray.join('').slice(0,qtd);
}

