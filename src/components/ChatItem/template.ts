import * as ejs from 'ejs';

const string = `
  <li class="chat-item">
    <div class="left">
      <div class="avatar"></div>
    </div>
    <div class="center">
      <b>Андрей</b>
      <span>Изображение</span>
    </div>
    <div class="right">
      <div class="time">10:49</div>
      <div class="count">2</div>
    </div>
  </li>
`;
const template = ejs.compile(string);

export default template;
