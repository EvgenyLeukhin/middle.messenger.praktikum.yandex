import * as ejs from 'ejs';

const string = `
  <header class="chat-header">
    <!-- avatar -->
    <a  class="chat-header__avatar" href="/user-settings">
      <div
        class="image"
        style="background-image:url(https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80)"
      ></div>
      <div class="name">Иван</div>
    </a>

    <!-- controls -->
    <div class="chat-header__controls">
      <div class="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </header>
`;
const template = ejs.compile(string);

export default template;
