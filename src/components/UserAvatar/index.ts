import template from './template';
import Component from '../../utils/spa/Component';

type TUSerAvatar =  {
  isEditable?: boolean;
  image: string;
  userName: string;
}

class ErrorContainer extends Component {
  constructor(props: TUSerAvatar) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ErrorContainer;
