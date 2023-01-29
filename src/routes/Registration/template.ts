import * as ejs from 'ejs';

const string = `
  <main>
    <section class="registration">
      <div class="container">
        <h2>Регистрация</h2>

        <form id="registration" class="registration__form" action="" method="post">
          <%- formLoader %>

          <%- registrationEmailInput %>
          <%- registrationLoginlInput %>
          <%- registrationNameInput %>
          <%- registrationSecondNameInput %>
          <%- registrationPhoneInput %>
          <%- registrationPasswordInput %>
          <%- registrationPasswordRepeatInput %>

          <div class="form-controls">
            <%- registrationSubmitButton %>
            <a href="authorization.ejs">Войти</a>
          </div>
        </form>
      </div>
    </section>
  </main>
`;

const template = ejs.compile(string);

export default template;
