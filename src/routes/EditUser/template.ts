import * as ejs from 'ejs';

const string = `
  <main>
    <%- goBackButton %>

    <section class="edit-user">
      <div class="container">
        <%- userAvatar %>

        <form class="edit-user__form" id="edit-user" action="" method="post">
          <%- formLoader %>

          <%- emailInput %>
          <%- loginInput %>
          <%- firstNameInput %>
          <%- secondNameInput %>
          <%- displayNameInput %>
          <%- phoneInput %>

          <%- formSubmitButton %>
        </form>
      </div>
    </section>
  </main>
`;

const template = ejs.compile(string);

export default template;
