import render from './utils/spa/render';

import {
  Authorization,
  ChangePassword,
  Chat,
  EditUser,
  Page404,
  Page500,
  Registration,
  TestPage,
  UserSettings,
} from './routes';

const currentUrl: string = window.location.pathname;
const rootId = '#root';

// routing
switch (true) {
  case currentUrl.includes('/authorization'): render(rootId, new Authorization()); break;
  case currentUrl.includes('/change-password'): render(rootId, new ChangePassword()); break;
  case currentUrl.includes('/edit-user'): render(rootId, new EditUser()); break;
  case currentUrl.includes('/404'): render(rootId, new Page404()); break;
  case currentUrl.includes('/500'): render(rootId, new Page500()); break;
  case currentUrl.includes('/registration'): render(rootId, new Registration()); break;
  case currentUrl.includes('/test'): render(rootId, new TestPage()); break;
  case currentUrl.includes('/user-settings'): render(rootId, new UserSettings()); break;

  // chat page by default
  default: render(rootId, new Chat());
}
