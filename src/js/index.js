import '../scss/main.scss'
import {Content} from './components/content/Content'
import {$} from './core/dom'
import {Modal} from './components/modal/Modal'
import {modalCallConfig, modalFeedBackConfig} from './components/modal/data'
import {brands, services} from './data';

const content = new Content('#app', {
  components: []
})

const $page = $(document.querySelector('.page'))

const modalFbRoot = $.create('div', 'modal')
const modalFb = new Modal(modalFbRoot, modalFeedBackConfig)
modalFbRoot.html(modalFb.toHTML())
$page.append(modalFbRoot)

const modalCallRoot = $.create('div', 'modal')
const modalCall = new Modal(modalCallRoot, modalCallConfig)
modalCallRoot.html(modalCall.toHTML())
$page.append(modalCallRoot)

const modalCallBtns = document.querySelectorAll('[data-call]')
const modalFbBtns = document.querySelectorAll('[data-feedback]')

console.log(modalCallBtns)

modalCallBtns.forEach(btn => {
  btn.addEventListener('click', modalCall.open)
})

modalFbBtns.forEach(btn => {
  btn.addEventListener('click', modalFb.open)
})

function createItem(item, visible = true) {
  const display = !visible ? 'style="display:none"' : ''
  return `
    <div class="cards__item card" ${display}>
      ${item.type === 'brand'
        ? `<img src="${item.logo}" alt="${item.brandName}">`
        : `<span class="card__title">${item.title}</span>`
      }
      <div class="card__icon">
      <a href="#" class="icon icon--view--stroke"></a>
      </div>
    </div>
  `
}

function createList(cards, fn) {
  const arr = []
  for(let i = 0; i < cards.length; i++) {
    const cardsCount = cards[i].type === 'brand' ? colsCount * 2 : colsCount
    let card  = i < cardsCount ? fn(cards[i]) : fn(cards[i], false)
    arr.push(card)
  }
  return arr
}

function createRow(list) {
  const row = document.createElement('div')
  row.classList.add('cards__row')
  row.innerHTML = list
  return row
}

const colsCount = window.innerWidth >= 992 ? 4 : 3
const brandList = createList(brands, createItem).join('')
const serviceList = createList(services, createItem).join('')
const brandsRow = createRow(brandList)
const servicesRow = createRow(serviceList)

document.querySelector('[data-list-of-brands]').appendChild(brandsRow)
document.querySelector('[data-list-of-services]').appendChild(servicesRow)

// Создать сущность кнопки с методами show() и hide()
const showBrands = document.querySelector('[data-show-more-brands]')
showBrands.addEventListener('click', () => {
  brandsRow.childNodes.forEach(i => {
    if(i.nodeName !== '#text' && i.style.display === 'none') {
      i.style.display = 'flex'
    }
  })
})

const showServices = document.querySelector('[data-show-more-services]')
showServices.addEventListener('click', () => {
  servicesRow.childNodes.forEach(i => {
    if(i.nodeName !== '#text' && i.style.display === 'none') {
      i.style.display = 'flex'
    }
  })
})
