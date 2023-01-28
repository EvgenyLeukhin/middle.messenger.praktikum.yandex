import * as ejs from 'ejs';

const string = `
  <main>
    <section class="error-page">
      <div class="container">
        <h2><%- errorCode %></h2>
        <p><%- errorMessage %> </p>
        <a href="<%- errorBackLink %>"><%- errorBackText %></a>
      </div>
    </section>
  </main>
`;
const template = ejs.compile(string);

export default template;
