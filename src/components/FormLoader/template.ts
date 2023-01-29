import * as ejs from 'ejs';

const string = `
  <div class="form-loader">
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
