import template from './template';
import Component from '../../utils/spa/Component';
import { Button, ChangeAvatarModal, FormInput, FormLoader, GoBackButton, UserAvatar } from '../../components';

class EditUser extends Component {
  constructor(props: Record<string, any> = {}) {
    const goBackButton = new GoBackButton({ link: '/user-settings' });

    const userAvatar = new UserAvatar({
      isEditable: true,
      userName: 'Иван',
      image: 'url(https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80)',
    });

    const formLoader = new FormLoader({});

    const emailInput = new FormInput({
      label: 'Почта',
      id: 'edit-user__email',
      type: 'email',
      name: 'email',
      value: 'pochta@yandex.ru',
    });

    const loginInput = new FormInput({
      label: 'Логин',
      id: 'edit-user__login',
      type: 'text',
      name: 'login',
      value: 'ivanivanov',
    });

    const firstNameInput = new FormInput({
      label: 'Имя',
      id: 'edit-user__first_name',
      type: 'text',
      name: 'first_name',
      value: 'Иван',
    });

    const secondNameInput = new FormInput({
      label: 'Фамилия',
      id: 'edit-user__second_name',
      type: 'text',
      name: 'second_name',
      value: 'Иванов',
    });

    const displayNameInput = new FormInput({
      label: 'Имя в чате',
      id: 'edit-user__display_name',
      type: 'text',
      name: 'display_name',
      value: 'Иванов',
    });

    const phoneInput = new FormInput({
      label: 'Телефон',
      id: 'edit-user__phone',
      type: 'tel',
      name: 'phone',
      value: '+7 (909) 967 30 30',
    });

    const formSubmitButton = new Button({
      buttonText: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault();
          alert('Edit user form submit')
        },
      },
    });;

    const changeAvatarModal = new ChangeAvatarModal({});

    super('div', {
      goBackButton,
      userAvatar,
      formLoader,
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayNameInput,
      phoneInput,
      formSubmitButton,
      changeAvatarModal,
    ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default EditUser;
