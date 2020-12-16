import {$} from '../../core/dom'

function _createForm(fields = []) {
  if (fields.length === 0) return
  const $form = $.create('form', 'form')

  fields.forEach((field) => {
    const $field = $.create(field.tag)
    field.class.forEach(cl => {
      $field.addClass(cl)
    })
    Object.keys(field.attrs).forEach(key => {
      $field.attr(key, field.attrs[key])
    })
    $form.append($field)
  })
  $form.insertAdjacentHTML('beforeend', `
    <p class="form__confirm">Нажимая “отправить”, вы даете согласие на обработку <a class="form__link" href="#">персональных данных</a> и соглашаетесь с нашей
      <a class="form__link" href="#">политикой конфиденциальности</a>
    </p>
    <button class="btn btn--submit form__submit" type="submit">
      Отправить
    </button>
  `)
  return $form.html()
}

export function _createModal(config) {
  return `
        <div class="modal__overlay">
          <div class="modal__aside">
            <i class="icon icon--view--close modal__close" data-close="true"></i>
            <div class="modal__title" data-title>
              ${config.title || ''}
            </div>
            ${_createForm(config.formFields)}
          </div>
        </div>
  `
}
