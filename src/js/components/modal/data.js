export const modalFeedBackConfig = {
  title: 'Обратная связь',
  formFields: [
    {
      tag: 'input',
      class: ['input', 'form__input'],
      attrs: {
        type: 'text',
        placeholder: 'Имя'
      }
    },
    {
      tag: 'input',
      class: ['input', 'form__input'],
      attrs: {
        type: 'tel',
        placeholder: 'Телефон'
      }
    },
    {
      tag: 'input',
      class: ['input', 'form__input'],
      attrs: {
        type: 'email',
        placeholder: 'Электронная почта'
      }
    },
    {
      tag: 'textarea',
      class: ['input', 'input--resize-none', 'form__input'],
      attrs: {
        rows: '4',
        placeholder: 'Сообщения'
      }
    }
  ]
}
export const modalCallConfig = {
  title: 'Заказать звонок',
  formFields: [
    {
      tag: 'input',
      class: ['input', 'form__input'],
      attrs: {
        type: 'tel',
        placeholder: 'Телефон'
      }
    }
  ]
}
