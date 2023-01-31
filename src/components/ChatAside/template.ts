import * as ejs from 'ejs';

const string = `
  <aside class="chat-aside">
    <div class="chat-aside__top">
      <!-- Профиль -->
      <a href="/user-settings">Профиль</a>

      <!-- Поиск -->
      <div class="chat-search-wrapper">
        <input type="text" name="chat-search" id="chat-search" />
        <label for="chat-search">
          <span>Поиск</span>
        </label>
      </div>
    </div>
  </aside>
`;
const template = ejs.compile(string);

export default template;
