import template from './template';
import Component from '../../spa/Component';
import ErrorContainer from '../../components/ErrorContainer';

class Page500 extends Component {
  constructor(props: Record<string, any> = {}) {
    const errorSection = new ErrorContainer({
      errorCode: '500',
      errorMessage: 'Мы уже фиксим',
      errorBackLink: '/',
      errorBackText: 'Назад к чатам',
    });
    super('main', { errorSection, ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Page500;
