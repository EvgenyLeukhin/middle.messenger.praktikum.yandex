import Block from "../../../js/utils/block";
import ejs from 'ejs';
import { template } from "./template";

export default class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("button", props);
  }

  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return ejs.compile(template, this.props);
  }
}
