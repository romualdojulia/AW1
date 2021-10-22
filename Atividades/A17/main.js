/* ============ VALIDAÇÃO ============= */
const button = document.getElementById('button')

button.addEventListener('click', event => {
  event.preventDefault()

  const nome = document.getElementById('nome')
  const cpf = document.getElementById('cpf')
  const tel = document.getElementById('telefone')
  const cep = document.getElementById('cep')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  /* validacao dos campos vazios */
  if (nome.value == '') {
    nome.classList.add('errorInput')
  } else {
    nome.classList.remove('errorInput')
  }

  if (cpf.value == '') {
    cpf.classList.add('errorInput')
  } else {
    cpf.classList.remove('errorInput')
  }

  if (tel.value == '') {
    tel.classList.add('errorInput')
  } else {
    tel.classList.remove('errorInput')
  }

  if (cep.value == '') {
    cep.classList.add('errorInput')
  } else {
    cep.classList.remove('errorInput')
  }

  /* validacao campos/caracteres especiais*/
  /* email */
  if (
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value.indexOf('.') - email.value.indexOf('@') == 1
  ) {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }

  /* cpf */
  if (!isNaN(cpf.value) == true && cpf.value.length == 11) {
    cpf.classList.remove('errorInput')
  }

  /* validacao do telefone */
  if (!isNaN(email.value) == true && email.value.length == 11) {
    email.classList.remove('errorInput')
  }

  /* validacao quantidade caracteres */
  if (cpf.value.length < 11) {
    cpf.classList.add('errorInput')
  } else {
    password.classList.remove('errorInput')
  }

  if (telefone.value.length <= 9) {
    telefone.classList.add('errorInput')
  } else {
    telefone.classList.remove('errorInput')
  }

  if (cep.value.length < 9) {
    cep.classList.add('errorInput')
  } else {
    cep.classList.remove('errorInput')
  }

  if (password.value.length <= 5) {
    password.classList.add('errorInput')
  } else {
    password.classList.remove('errorInput')
  }
})

/* ============ MASCARAS ============= */
const masks = {
  cpf(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },

  telefone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
}

document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener(
    'input',
    e => {
      e.target.value = masks[field](e.target.value)
    },
    false
  )
})
