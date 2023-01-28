import ejs from 'ejs';

const string = `
  <section class="chat">
    <h1>Chat</h1>
  </section>
`;

const template = ejs.compile(string);

export default template;
