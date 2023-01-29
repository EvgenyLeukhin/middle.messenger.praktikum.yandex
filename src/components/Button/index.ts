import template from './template';
import Component from '../../utils/spa/Component';
import { StatusList } from '../../types/common';

type TButton =  {
  buttonStatus?: StatusList;
  buttonText: string;
  buttonType?: string;
  events?: { click: (e: Event) => void };
}

class Button extends Component {
  constructor(props: TButton) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Button;
