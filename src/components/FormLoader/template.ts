import * as ejs from 'ejs';

const string = `
  <div class="FormLoader">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
`;
const template = ejs.compile(string);

export default template;
