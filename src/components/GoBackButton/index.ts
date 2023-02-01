import template from './template';
import Component from '../../utils/spa/Component';

type TGoBackButton = {
  link?: string;
}

class GoBackButton extends Component {
  constructor(props: TGoBackButton) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default GoBackButton;
