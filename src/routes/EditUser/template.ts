import * as ejs from 'ejs';

const string = `
  <main>
    <%- goBackButton %>

    <section class="EditUser">
      <div class="container">
        <%- userAvatar %>

        <form class="EditUser__form" id="edit-user" action="" method="post">
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

    <%- changeAvatarModal %>
  </main>
`;

const template = ejs.compile(string);

export default template;
