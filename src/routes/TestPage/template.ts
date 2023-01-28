import ejs from 'ejs';

const string = `
    <div class="test-page">
        <h1>This is test page</h1>
    </div>
`;

const template = ejs.compile(string);

export default template;
