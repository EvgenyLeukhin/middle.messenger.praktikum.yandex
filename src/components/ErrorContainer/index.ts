import template from './template';
import Component from '../../utils/spa/Component';

// ejs variables <%- %> as props object
type TErrorContainer = {
  errorCode: string;
  errorMessage: string;
  errorBackLink: string;
  errorBackText: string;
}

class ErrorContainer extends Component {
  // transfer props(ejs vars) to Components constructor
  constructor(props: TErrorContainer) {
    // ???
    super('div', props);
  }

  render() {
    // render template with ejs-vars as props
    // by Components setTemplate and render methods
    return this.setTemplate(template, this.props);
  }
}

export default ErrorContainer;
