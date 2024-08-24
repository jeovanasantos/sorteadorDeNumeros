function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while(sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);

  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterarStatusBotao(){
  let reiniciar = document.getElementById('btn-reiniciar');
  if( reiniciar.classList.contains('container__botao-desabilitado')) {
    reiniciar.classList.remove('container__botao-desabilitado');
    reiniciar.classList.add('container__botao');
  }else{
    reiniciar.classList.remove('container__botao');
    reiniciar.classList.add('container__botao-desabilitado');

  }
}