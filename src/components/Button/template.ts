import * as ejs from 'ejs';

const string = `
  <button
    class="
      button
      <%= typeof buttonStatus != 'undefined' ? buttonStatus : 'bg-primary' %>
    "
    type="<%= typeof buttonType !='undefined' ? buttonType : 'submit' %>"
  >
    <%= buttonText %>
  </button>
`;
const template = ejs.compile(string);

export default template;
