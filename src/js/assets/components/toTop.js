const toTop = document.querySelector('.to-top')

toTop.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

function toTopToggle() {
  if (document.body.scrollTop >= 750 || document.documentElement.scrollTop >= 750) {
    toTop.classList.add('to-top--active')
  } else {
    toTop.classList.remove('to-top--active')
  }
}

window.addEventListener('scroll', () => {
  toTopToggle()
})