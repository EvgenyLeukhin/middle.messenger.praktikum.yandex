import Component from '../../utils/spa/Component';
import template from './template';

class Registration extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Registration;
