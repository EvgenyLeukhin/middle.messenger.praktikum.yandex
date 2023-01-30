import * as ejs from 'ejs';

const string = `
  <main>
    <%- goBackButton %>

    <section class="ChangePassword">
      <div class="container">
        <%- userAvatar %>

        <form class="ChangePassword__form" id="change-password" action="" method="post">
          <%- formLoader %>

          <%- oldPassword %>

          <%- newPassword %>

          <%- newPasswordRepeat %>

          <%- submitButton %>
        </form>
      </div>
    </section>
  </main>
`;

const template = ejs.compile(string);

export default template;
