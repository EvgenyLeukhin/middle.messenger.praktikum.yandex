import * as ejs from 'ejs';

// ejs variables <%- %> as props
const string = `
  <main>
    <section class="ErrorPage">
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
