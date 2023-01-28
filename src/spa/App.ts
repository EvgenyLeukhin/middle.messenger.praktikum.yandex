import render from '../spa/render';
import TestPage from '../routes/TestPage';

switch (true) {
  default:
    render('#root', new TestPage());
}
