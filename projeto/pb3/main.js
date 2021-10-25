var carta1 = {
  nome: 'Jake Peralta',
  imagem: 'assets/jake3.png',
  atributos: {
    investigação: 9,
    humor: 10,
    força: 7
  }
}

var carta2 = {
  nome: 'Rosa Diaz',
  imagem: 'assets/rosa.png',
  atributos: {
    investigação: 8,
    humor: 2,
    força: 9
  }
}

var carta3 = {
  nome: 'Capitão Holt',
  imagem: 'assets/holt.png',
  atributos: {
    investigação: 10,
    humor: 2,
    força: 9
  }
}

var carta4 = {
  nome: 'Charles Boyle',
  imagem: 'assets/boyle.png',
  atributos: {
    investigação: 7,
    humor: 5,
    força: 7
  }
}

var carta5 = {
  nome: 'Amy Santiago',
  imagem: 'assets/amy.png',
  atributos: {
    investigação: 10,
    humor: 6,
    força: 9
  }
}

var carta6 = {
  nome: 'Terry Jeffords',
  imagem: 'assets/terry.png',
  atributos: {
    investigação: 7,
    humor: 6,
    força: 10
  }
}

var carta7 = {
  nome: 'Hitchcock',
  imagem: 'assets/hit.png',
  atributos: {
    investigação: 4,
    humor: 1,
    força: 2
  }
}

var carta8 = {
  nome: 'Scully',
  imagem: 'assets/scully.png',
  atributos: {
    investigação: 4,
    humor: 1,
    força: 2
  }
}

var carta9 = {
  nome: 'Gina Linetti',
  imagem: 'assets/gina.png',
  atributos: {
    investigação: 7,
    humor: 10,
    força: 5
  }
}

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9
]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 9)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 9)
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 9)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var divResultado = document.getElementById('resultado')
  var atributoSelecionado = obtemAtributoSelecionado()
  if (atributoSelecionado == null) {
    Swal.fire({
      icon: 'info',
      title: 'Escolha um atributo '
    })
  } else if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    Swal.fire({
      icon: 'success',
      title: 'Você venceu'
    })
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Você perdeu'
    })
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Empatou!'
    })
  }
  exibirCartaMaquina()

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = true
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ' ' +
      cartaJogador.atributos[atributo] +
      '<br>'
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'

  /*carta maquina */
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ': ' +
      '-' +
      '<br>'
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

/* jogar novamente */
var btn = document.querySelector('#refresh')
btn.addEventListener('click', function () {
  location.reload()
})

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ' ' +
      cartaMaquina.atributos[atributo] +
      '</p>'
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
