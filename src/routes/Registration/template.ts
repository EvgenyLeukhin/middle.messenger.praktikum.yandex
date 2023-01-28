import ejs from 'ejs';

const string = `
  <section class="registration">
    <h1>Registration</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
