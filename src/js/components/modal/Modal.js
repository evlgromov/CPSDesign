import {Component} from '../../core/Component'
import {_createModal} from './modal.template';
import {$} from '../../core/dom';

const ANIMATION_SPEED = 800

export class Modal extends Component {
  constructor($root, config) {
    super($root, {
      name: 'Modal',
      listeners: ['click']
    })
    this.$root = $root
    this.config = config
    this.init()
  }

  init() {
    this.lock = false
    this.destroyed = false
    this.open = this.open.bind(this)
    this.initDomListeners()
  }

  toHTML() {
    return _createModal(this.config)
  }

  open() {
    if (this.destroyed) {
      return console.log('Modal is destroyed!')
    }
    !this.lock && this.$root.addClass('modal--open')
  }
  close() {
    this.lock = true
    this.$root.removeClass('modal--open')
    this.$root.addClass('fading')
    setTimeout(() => {
      this.$root.removeClass('fading')
      this.lock = false
    }, ANIMATION_SPEED)
  }
  destroy() {
    this.$root.parentNode.removeChild(this.$root)
    this.destroyed = true
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.data.close) {
      this.close()
    }
  }
}
