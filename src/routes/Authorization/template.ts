import * as ejs from 'ejs';

const string = `
  <main>
    <section class="authorization">
      <div class="container">
        <h2>Вход</h2>

        <form
          id="authorization"
          class="authorization__form"
          action=""
          method="post"
        >
          <%- formLoader %>
          <%- authNameInput %>
          <%- authPasswordInput %>

          <div class="form-controls">
            <%- authSubmitButton %>
            <a href="registration">Нет аккаунта?</a>
          </div>
        </form>
      </div>
    </section>
  </main>
`;

const template = ejs.compile(string);

export default template;
