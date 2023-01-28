import ejs from 'ejs';

const string = `
  <section class="error-page">
    <h1>500</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
