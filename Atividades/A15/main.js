// GET ALL KEYS
const keys = document.querySelectorAll('.key')

function playNote(event) {
  let audioKeyCode = getKeyCode(event)

  //TYPED OR PRESSED KEY
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  //IF KEY EXISTS
  const cantFoundAnyKey = !key
  if (cantFoundAnyKey) {
    return
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode

  const isKeyboard = event.type === 'keydown'
  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}

function registerEvents() {
  // CLICK WITH MOUSE
  keys.forEach(function (key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
  })

  // KEYBOARD TYPE
  window.addEventListener('keydown', playNote)
}
window.addEventListener('load', registerEvents)