import * as ejs from 'ejs';

const string = `
  <footer class="chat-footer">
    <!-- file upload -->
    <div>
      <label for="upload-file"></label>
      <input type="file" name="upload-file" id="upload-file" />
    </div>

    <!-- enter message -->
    <div class="enter-message-wrapper">
      <input type="text" name="enter-message" id="enter-message" placeholder="Сообщение" />
    </div>

    <!-- send button -->
    <a href="#" class="send-button"></a>
  </footer>
`;
const template = ejs.compile(string);

export default template;
