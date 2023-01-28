import Component from '../../spa/Component';
import template from './template';

class Page404 extends Component {
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Page404;
