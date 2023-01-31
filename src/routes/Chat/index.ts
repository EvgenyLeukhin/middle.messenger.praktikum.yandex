import { ChatAside, ChatHeader, ChatFooter, ChatDayContent } from '../../components';
import Component from '../../utils/spa/Component';
import template from './template';

class Chat extends Component {
  constructor(props: Record<string, any> = {}) {
    const chatAside = new ChatAside({});
    const chatHeader = new ChatHeader({});
    const chatDayContent = new ChatDayContent({});
    const chatFooter = new ChatFooter({});

    super('main', {
      chatAside,
      chatHeader,
      chatDayContent,
      chatFooter,
      ...props
    });
  }
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Chat;
