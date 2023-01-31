import template from './template';
import Component from '../../utils/spa/Component';

class ChatHeader extends Component {
  constructor(props) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChatHeader;
