import Component from '../../utils/spa/Component';
import template from './template';

class EditUser extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default EditUser;
