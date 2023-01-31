import Component from '../../utils/spa/Component';
import template from './template';

class TestPage extends Component {
  constructor(props: Record<string, any> = {}) {
    super('div', props);
  }
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default TestPage;
