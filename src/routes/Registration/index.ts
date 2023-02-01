import template from './template';
import Component from '../../utils/spa/Component';
import { Button, FormInput, FormLoader } from '../../components';

class Registration extends Component {
  constructor(props: Record<string, any> = {}) {
    const formLoader = new FormLoader(props);

    const registrationEmailInput = new FormInput({
      label: 'Почта',
      id: 'registration__email',
      type: 'email',
      name: 'email',
      value: 'pochta@yandex.ru',
    });

    const registrationLoginlInput = new FormInput({
      label: 'Логин',
      id: 'registration__login',
      type: 'text',
      name: 'login',
      value: 'ivanivanov',
    });

    const registrationNameInput = new FormInput({
      label: 'Имя',
      id: 'registration__first-name',
      type: 'text',
      name: 'first-name',
      value: 'Иван',
    });

    const registrationSecondNameInput = new FormInput({
      label: 'Фамилия',
      id: 'registration__second-name',
      type: 'text',
      name: 'second_name',
      value: 'Иванов',
    });

    const registrationPhoneInput = new FormInput({
      label: 'Телефон',
      id: 'registration__phone',
      type: 'text',
      name: 'phone',
      value: '+7 (909) 967 30 30',
    });

    const registrationPasswordInput = new FormInput({
      label: 'Пароль',
      id: 'registration__password',
      type: 'password',
      name: 'password',
      value: 'ivanivanov',
    });

    const registrationPasswordRepeatInput = new FormInput({
      label: 'Пароль (ещё раз)',
      id: 'registration__password-repeat',
      type: 'password',
      name: 'password-repeat',
      value: 'ivanivanov',
    });

    const registrationSubmitButton = new Button({
      buttonText: 'Зарегистрироваться',

      // auth formSubmit
      events: {
        click: (e) => {
          e.preventDefault();
          alert('Register form submit');
        },
      },
    });

    super('div', {
      formLoader,
      registrationEmailInput,
      registrationLoginlInput,
      registrationNameInput,
      registrationSecondNameInput,
      registrationPhoneInput,
      registrationPasswordInput,
      registrationPasswordRepeatInput,
      registrationSubmitButton,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Registration;
