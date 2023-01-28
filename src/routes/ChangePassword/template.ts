import ejs from 'ejs';

const string = `
  <section class="change-password">
    <h1>ChangePassword</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
