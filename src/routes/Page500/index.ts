import Component from '../../spa/Component';
import template from './template';

class Page500 extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Page500;
