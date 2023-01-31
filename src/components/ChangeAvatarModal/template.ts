import * as ejs from 'ejs';

// ejs variables <%- %> as props
const string = `
  <div class="ChangeAvatarModal" hidden>
    <div class="ChangeAvatarModal__content">
      <div class="ChangeAvatarModal__close"></div>
      <h4>Загрузите файл</h4>
      <label for="user-avatar" class="text-primary">
        Выбрать файл на <br />компьютере
      </label>
      <input type="file" name="user-avatar" id="user-avatar">

      <button class="Button bg-primary">Поменять</button>
    </div>
  </div>
`;
const template = ejs.compile(string);

export default template;
