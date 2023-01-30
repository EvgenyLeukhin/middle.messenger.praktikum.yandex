import template from './template';
import Component from '../../utils/spa/Component';
import { GoBackButton, UserAvatar } from '../../components';

class UserSettings extends Component {
  constructor(props: Record<string, any> = {}) {
    const goBackButton = new GoBackButton({ link: '/' });

    const userAvatar = new UserAvatar({
      userName: 'Иван',
      image: 'url(https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80)',
    });

    const userEmail = 'pochta@yandex.ru';
    const userLogin = 'ivanivanov';
    const userName = 'Иван';
    const userSecondName = 'Иванов';
    const userNickname = 'Иван';
    const userPhone = '+7 (909) 967 30 30';

    super('main', {
      goBackButton,
      userAvatar,
      userEmail,
      userLogin,
      userName,
      userSecondName,
      userNickname,
      userPhone,
      ...props
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default UserSettings;
