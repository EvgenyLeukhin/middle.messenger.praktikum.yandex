import * as ejs from 'ejs';

const string = `
  <div class="chat-day-content">
    <div class="date">19 июня</div>

    <ul class="chat-day-content__list">
      <li class="external sended read">
        <p>Привет!</p>
        <div class="time">11:56</div>
      </li>

      <li class="external sended read">
        <p>Как дела?</p>
        <div class="time">11:56</div>
      </li>

      <li class="internal sended read">
        <p>Привет! 👋</p>
        <div class="time">11:57</div>
      </li>

      <li class="internal sended read">
        <p>Хорошо!</p>
        <div class="time">11:57</div>
      </li>

      <li class="internal sended">
        <p>Зацени мой новый аватар 👱</p>
        <div class="time">11:58</div>
      </li>

      <li class="internal with-image sended">
        <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" alt="image">
        <div class="time">11:58</div>
      </li>

      <li class="external sended read">
        <p>👍</p>
        <div class="time">12:00</div>
      </li>

      <li class="external sended read">
        <p>Хорошо получился</p>
        <div class="time">12:00</div>
      </li>

      <li class="external sended read">
        <p>Прям как модель с обложки журнала</p>
        <div class="time">12:01</div>
      </li>

      <li class="internal sended read">
        <p>Спасибо</p>
        <div class="time">12:02</div>
      </li>
    </ul>
  </div>
`;
const template = ejs.compile(string);

export default template;
