import scss from './scss/index.scss'
import imgs from './img'

function imgHtmlStr(arr) {
  return arr
    .map(
      el => `<div class="img-wrap"
    style="background-image: url(${el})"></div>`
    )
    .join('')
}
function tpl(el, idx) {
  const title = `${idx + 1}. ${el.title}`
  return `<div class='gift'><h3>${title}</h3>${imgHtmlStr(el.images)}</div>`
}
function doScrolling(elementY, duration) {
  const startingY = window.pageYOffset
  const diff = elementY - startingY
  let start

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed milliseconds since start of scrolling.
    const time = timestamp - start
    // Get percent of completion in range [0, 1].
    const percent = Math.min(time / duration, 1)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
const appHtmlStr = imgs.map(tpl).join('')

const appEle = document.getElementById('app')
const appTitleEle = document.getElementById('app-title')
const backToTopEle = document.getElementById('backToTop')
appEle.innerHTML = appHtmlStr

backToTopEle.addEventListener('click', function(ev) {
  doScrolling(0, 200)
})
