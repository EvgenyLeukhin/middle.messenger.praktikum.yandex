import template from './template';
import Component from '../../utils/spa/Component';
import { FormLoader } from '../../components';

class Registration extends Component {
  constructor(props: Record<string, any> = {}) {
    const formLoader = new FormLoader(props);
    const registrationEmailInput = null
    const registrationLoginlInput = null
    const registrationNameInput = null
    const registrationSecondNameInput = null
    const registrationPhoneInput = null
    const registrationPasswordInput = null
    const registrationPasswordRepeatInput = null
    const registrationSubmitButton = null

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
