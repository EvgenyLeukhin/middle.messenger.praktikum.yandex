import * as ejs from 'ejs';

const string = `
  <div class="user-avatar">
    <div
      class="user-avatar__image <%= typeof editable != 'undefined' ? 'isEditable' : null %>"
      style="background-image:
        <%=
          typeof image != 'undefined'
            ? image
            : 'url(../../public/images/avatar-template.svg)'
        %>"
    >
      <div class="avatar-overlay">Поменять<br />аватар</div>
    </div>
    <div class="user-avatar__name"><%= userName %></div>
  </div>
`;
const template = ejs.compile(string);

export default template;
