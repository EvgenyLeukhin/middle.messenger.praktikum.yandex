import template from './template';
import Component from '../../utils/spa/Component';

type TFormInput = {
  id?: string;
  type: string;
  name: string;
  value?: string
  label?: string
  events?: { focus: (e: Event) => void; blur: (e: Event) => void };
}

class FormInput extends Component {
  constructor(props: TFormInput) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default FormInput;
