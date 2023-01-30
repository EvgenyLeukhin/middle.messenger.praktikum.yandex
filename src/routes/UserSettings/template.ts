import * as ejs from 'ejs';

const string = `
  <main>
    <section class="user-settings">
      <div class="container">

        <%- userAvatar %>

        <div class="user-settings__middle">
          <ul class="user-settings__data-list">
            <li>
              <b>Почта</b>
              <span><%- userEmail %></span>
            </li>
            <li>
              <b>Логин</b>
              <span><%- userLogin %></span>
            </li>
            <li>
              <b>Имя</b>
              <span><%- userName %></span>
            </li>
            <li>
              <b>Фамилия</b>
              <span><%- userSecondName %></span>
            </li>
            <li>
              <b>Имя в чате</b>
              <span><%- userNickname %></span>
            </li>
            <li>
              <b>Телефон</b>
              <span><%- userPhone %></span>
            </li>
          </ul>
        </div>

        <div class="user-settings__bottom">
          <ul class="user-settings__controls-list">
            <li><a href="/edit-user" class="text-primary">Изменить данные</a></li>
            <li><a href="/change-password" class="text-primary">Изменить пароль</a></li>
            <li><a href="/authorization" class="text-error">Выйти</a></li>
          </ul>
        </div>
      </div>
    </section>
  </main>
`;

const template = ejs.compile(string);

export default template;
