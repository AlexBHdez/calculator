document.addEventListener('DOMContentLoaded', () => {

  const showTime = () => {
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const minutes = m < 10 ? `0${m}` : m
    const time = `${h}:${minutes}`

    const timeElement = document.querySelector('#time')
    timeElement.innerText = time

    setTimeout(showTime, 1000*60)
  }

  showTime()

})
