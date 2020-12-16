export function $(selector) {
  return new Dom(selector)
}

export class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
  insertAdjacentHTML(where, html) {
    this.$el.insertAdjacentHTML(where, html)
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }
  addClass(className) {
    this.$el.classList.add(className)
    return this
  }
  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }
  attr(name, value) {
    if (value) {
      this.$el.setAttribute(name, value)
      return this
    }
    return this.$el.getAttribute(name)
  }
  get data() {
    return this.$el.dataset
  }
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
