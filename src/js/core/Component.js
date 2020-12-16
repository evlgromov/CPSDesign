import {DOMListener} from './DOMListener';

export class Component extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
  }
  toHTML() {
    return ''
  }
}
