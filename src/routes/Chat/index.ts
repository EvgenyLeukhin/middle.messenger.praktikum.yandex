import Component from '../../utils/spa/Component';
import template from './template';

class Chat extends Component {
  constructor(props: Record<string, any> = {}) {
    const a = null;
    const b = null;
    const c = null;

    super('main', {
      a,
      b,
      c,
      ...props
    });
  }
  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Chat;
