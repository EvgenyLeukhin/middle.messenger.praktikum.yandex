import render from '../spa/render';
import Authorization from '../routes/Authorization';
import ChangePassword from '../routes/ChangePassword';
import Chat from '../routes/Chat';
import EditUser from '../routes/EditUser';
import Page404 from '../routes/Page404';
import Page500 from '../routes/Page500';
import Registration from '../routes/Registration';
import TestPage from '../routes/TestPage';
import UserSettings from '../routes/UserSettings';

const currentUrl: string = window.location.pathname;
const rootId: string = '#root';

// routing
switch (true) {
  case currentUrl.includes('/authorization'):    render(rootId, new Authorization()); break;
  case currentUrl.includes('/change-password'):  render(rootId, new ChangePassword()); break;
  case currentUrl.includes('/edit-user'):        render(rootId, new EditUser()); break;
  case currentUrl.includes('/404'):              render(rootId, new Page404()); break;
  case currentUrl.includes('/500'):              render(rootId, new Page500()); break;
  case currentUrl.includes('/registration'):     render(rootId, new Registration()); break;
  case currentUrl.includes('/test'):             render(rootId, new TestPage()); break;
  case currentUrl.includes('/user-settings'):    render(rootId, new UserSettings()); break;
default:                                         render(rootId, new Chat());
}
