import {
  Button, FormInput, FormLoader, GoBackButton, UserAvatar,
} from '../../components';
import Component from '../../utils/spa/Component';
import template from './template';

class ChangePassword extends Component {
  constructor(props: Record<string, any> = {}) {
    const goBackButton = new GoBackButton({ link: '/user-settings' });

    const userAvatar = new UserAvatar({
      userName: 'Иван',
      image: 'url(https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80)',
    });

    const formLoader = new FormLoader(props);

    const oldPassword = new FormInput({
      label: 'Старый пароль',
      id: 'change-password__oldPassword',
      type: 'password',
      name: 'oldPassword',
      value: '',
    });

    const newPassword = new FormInput({
      label: 'Новый пароль',
      id: 'change-password__newPassword',
      type: 'password',
      name: 'newPassword',
      value: '',
    });

    const newPasswordRepeat = new FormInput({
      label: 'Повторите новый пароль',
      id: 'change-password__newPassword-repeant',
      type: 'password',
      name: 'newPassword-repeant',
      value: '',
    });

    const submitButton = new Button({
      buttonText: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault();
          alert('Change password form submit');
        },
      },
    });

    super('main', {
      goBackButton,
      userAvatar,
      formLoader,
      oldPassword,
      newPassword,
      newPasswordRepeat,
      submitButton,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChangePassword;
