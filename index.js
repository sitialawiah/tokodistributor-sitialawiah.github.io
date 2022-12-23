self.addEventListener('DOMContentLoaded', () => {
  const navigation = document.getElementById('navigation')
  const navigationImage = document.getElementById('navigation-image')

  // add event listener to navigation when scrolled bg white
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navigation.classList.add('white-background')
      navigationImage.src = './assets/tokodistributor-red.svg'
    } else {
      navigation.classList.remove('white-background')
      navigationImage.src = './assets/tokodistributor.svg'
    }
  })
})
