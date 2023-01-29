import template from './template';
import Component from '../../utils/spa/Component';
import { FormLoader } from '../../components';

class Profile extends Component {
  constructor(props: Record<string, any> = {}) {
    const formLoader = new FormLoader(props);
    const authNameInput = null
    const authPasswordInput = null
    const authSubmitButton = null

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
