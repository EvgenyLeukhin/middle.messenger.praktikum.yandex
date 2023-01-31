import template from './template';
import Component from '../../utils/spa/Component';

class ChatAside extends Component {
  constructor(props) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChatAside;
