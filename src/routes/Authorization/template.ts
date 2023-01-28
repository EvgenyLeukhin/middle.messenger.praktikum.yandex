import ejs from 'ejs';

const string = `
  <section class="authorization">
    <h1>Authorization</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
