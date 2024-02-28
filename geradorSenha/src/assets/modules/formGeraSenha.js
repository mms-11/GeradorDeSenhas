import gerarSenha from "./geradores";

const senha_div = document.querySelector('.geradorSenha');//elemento html onde colocar a senha gerada

//falta gerar a senha

const quantidade = document.querySelector('.chk-quantidade');//elemento de quantidade de caracteres da senha
const maiusculas = document.querySelector('.chk-maiusculas');//elemento que diz se a senha tem ou não maiuscula
const minusculas = document.querySelector('.chk-minusculas'); //elemento que diz se a senha tem ou não minuscula
const caracteresEspeciais = document.querySelector('.chk-simbolos');//elemento que diz se a senha tem ou não caracteres espeiais
const numeros = document.querySelector('.chk-numeros');//elemento que diz se a senha possui ou não numeros
const botaoSenha = document.querySelector('.gerar-senha');//elemento de submeter a geração da senha






//agora gerar a senha de acordo com a marcação ou não dos elementos declarados acima
//quando o usuario clicar o botao enviar
export default function gerador(){
    botaoSenha.addEventListener('click', () => {

        
          //chama a função para gerar senha
            senha_div.innerHTML = Senha();
        
    });
}

const Senha = () =>{
    const senha =  gerarSenha(quantidade.value,maiusculas.checked,minusculas.checked,numeros.checked,caracteresEspeciais.checked);
    return senha || 'Nada Selecionado';
};



