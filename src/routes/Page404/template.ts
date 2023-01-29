import * as ejs from 'ejs';

// save all page layout as ejs-const
const string = `<%- errorSection %>`;

const template = ejs.compile(string);

export default template;
