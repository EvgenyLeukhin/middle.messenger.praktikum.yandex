import Component from '../../spa/Component';
import template from './template';

class Authorization extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Authorization;
