import Component from '../../spa/Component';
import template from './template';

class TestPage extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default TestPage;
