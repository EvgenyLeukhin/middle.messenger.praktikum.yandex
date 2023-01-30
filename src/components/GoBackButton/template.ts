import * as ejs from 'ejs';

const string = `
  <nav class="GoBackButton">
    <a href="<%= link %>" class="bg-primary"></a>
  </nav>
`;
const template = ejs.compile(string);

export default template;
