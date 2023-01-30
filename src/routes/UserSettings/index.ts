import template from './template';
import Component from '../../utils/spa/Component';

class Page500 extends Component {
  constructor(props: Record<string, any> = {}) {
    const userAvatar = null;
    const userEmail = 'pochta@yandex.ru';
    const userLogin = 'ivanivanov';
    const userName = 'Иван';
    const userSecondName = 'Иванов';
    const userNickname = 'Иван';
    const userPhone = '+7 (909) 967 30 30';

    super('main', {
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

export default Page500;
