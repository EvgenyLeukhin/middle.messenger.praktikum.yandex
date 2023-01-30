import * as ejs from 'ejs';

const string = `
  <div class="UserAvatar">
    <div
      class="UserAvatar__image <%= typeof isEditable != 'undefined' ? 'isEditable' : null %>"
      style="background-image:
        <%=
          typeof image != 'undefined'
            ? image
            : 'url(../../public/images/avatar-template.svg)'
        %>"
    >
      <div class="avatar-overlay">Поменять<br />аватар</div>
    </div>
    <div class="UserAvatar__name"><%= userName %></div>
  </div>
`;
const template = ejs.compile(string);

export default template;
