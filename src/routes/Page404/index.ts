import template from './template';
import Component from '../../spa/Component';
import ErrorContainer from '../../components/ErrorContainer';

class Page404 extends Component {
  constructor(props: Record<string, any> = {}) {
    const errorSection = new ErrorContainer({
      errorCode: '404',
      errorMessage: 'Не туда попали',
      errorBackLink: '/',
      errorBackText: 'Назад к чатам',
    });
    super('main', { errorSection, ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Page404;
