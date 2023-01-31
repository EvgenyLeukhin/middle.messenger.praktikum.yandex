import * as ejs from 'ejs';

const string = `
  <div class="chat">
    <%- chatAside %>

    <main>
      <%- chatHeader %>

      <div class="chat-content">
        <%- chatDayContent %>
      </div>

      <%- chatFooter %>
    </main>
  </div>
`;

const template = ejs.compile(string);

export default template;
