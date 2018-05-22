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

const appHtmlStr = imgs.map(tpl).join('')

const appEle = document.getElementById('app')
const appTitleEle = document.getElementById('app-title')
const backToTopEle = document.getElementById('backToTop')
appEle.innerHTML = appHtmlStr

backToTopEle.addEventListener('click', function(ev) {
  appTitleEle.scrollIntoView({ block: 'end', behavior: 'smooth' })
})
