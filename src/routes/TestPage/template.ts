import * as ejs from 'ejs';

const string = `
  <section class="test-page">
    <h1>This is test page</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
