import ejs from 'ejs';

const string = `
  <section class="edit-user">
    <h1>Edit User</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
