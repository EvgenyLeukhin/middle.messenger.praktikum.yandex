import * as ejs from 'ejs';

const string = `
  <div class="FormInput">
    <div class="FormInput__wrapper">
      <input
        id="<%= id %>"
        type="<%= type %>"
        name="<%= name %>"
        value="<%= value %>"
      />
      <label for="<%= id %>"><%= label %></label>
    </div>

    <p class="FormInput__validation"></p>
  </div>
`;

const template = ejs.compile(string);

export default template;
