import template from './template';
import Component from '../../utils/spa/Component';

type TErrorContainer =  {
  errorCode: string;
  errorMessage: string;
  errorBackLink: string;
  errorBackText: string;
}

class ErrorContainer extends Component {
  constructor(props: TErrorContainer) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ErrorContainer;
