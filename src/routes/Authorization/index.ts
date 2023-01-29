import template from './template';
import Component from '../../utils/spa/Component';
import { FormLoader } from '../../components';

class Profile extends Component {
  constructor(props: Record<string, any> = {}) {
    const formLoader = new FormLoader();
    const authNameInput = new FormLoader();
    const authPasswordInput = new FormLoader();
    const authSubmitButton = new FormLoader();

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

export default Profile;
