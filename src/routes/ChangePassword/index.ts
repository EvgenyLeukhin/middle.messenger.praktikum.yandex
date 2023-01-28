import Component from '../../spa/Component';
import template from './template';

class ChangePassword extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChangePassword;
