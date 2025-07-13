let numeroLimite = 1000;

let parcela1;
let parcela2;
let soma;

// gerar numeros aleatorios
function gerarNumeros() {
  parcela1 = Math.floor(Math.random() * numeroLimite + 1);
  parcela2 = Math.floor(Math.random() * numeroLimite + 1);

  //somar as variaveis geradas.
  soma = parcela1 + parcela2;

  //adiciona os numeros no elemento do html
  document.querySelector('#parcela1').textContent = parcela1;
  document.querySelector('#parcela2').textContent = parcela2;
}

// gerar a conta na primeira vez
gerarNumeros();

//receber o resultado
let resultado = document.querySelector('#resultado'); //input ja é tipo number
document.querySelector('#btn-enviar').addEventListener('click', () => {
  let resposta = parseInt(resultado.value); //recebe os numeros digitados que por padrão é uma string e os converte para numeros inteiros
  //compara o resultado com a soma
  if (soma === resposta) {
    alert('Formulário enviado, aguarde nosso contato'); //se estiver certo envia o formulario
  } else {
    //mensagem de alerta de erro e gera novos numeros
    alert('Tente Novamente');
    gerarNumeros();
  }
  resultado.value = ''; //limpa o input de resultado
});

//menu hamburguer

//ao clicar aparecer o menu
document.querySelector('#btn-menu').addEventListener('click', () => {
  document.querySelector('#nav-list').classList.add('active'); //adiciona uma classe estilizada com a categorias modificadas
  document.querySelector('.header-img').classList.add('open'); //adiciona a classe que remove a  imagem monks do header
});
//botao back, fecha o menu
document.querySelector('#btn-back').addEventListener('click', (e) => {
  e.preventDefault(); //evita o evento padrao do navegador
  document.querySelector('#nav-list').classList.remove('active'); //tira a tela de categoria do menu hamburguer
  document.querySelector('.header-img').classList.remove('open'); //"coloca a imagem de volta"
});
