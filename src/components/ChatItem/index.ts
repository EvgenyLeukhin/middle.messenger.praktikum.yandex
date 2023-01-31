import template from './template';
import Component from '../../utils/spa/Component';

class ChatItem extends Component {
  constructor(props) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChatItem;
