import template from './template';
import Component from '../../utils/spa/Component';
import { FormLoader, FormInput, Button } from '../../components';

class Authorization extends Component {
  constructor(props: Record<string, any> = {}) {
    const formLoader = new FormLoader(props);

    const authNameInput = new FormInput({
      id: 'authorization__login',
      type: 'text',
      name: 'login',
      value: 'ivanivanov',
      label: 'Логин',
    });

    const authPasswordInput = new FormInput({
      id: 'authorization__password',
      type: 'password',
      name: 'password',
      value: 'ivanivanov',
      label: 'Пароль',
    });

    const authSubmitButton = new Button({
      buttonText: 'Сохранить',

      // auth formSubmit
      events: {
        click: (e) => {
          e.preventDefault();
          alert('Form submit')
        },
      },
    });

    super('div', {
      formLoader,
      authNameInput,
      authPasswordInput,
      authSubmitButton,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Authorization;
