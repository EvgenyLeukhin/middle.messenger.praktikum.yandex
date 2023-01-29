import Component from './Component';

function render(query: string, component: Component) {
  const root = document.querySelector(query) as HTMLElement;
  // add element to Virtual DOM
  root.appendChild(component.getElement());

  // add components lifecycle handler
  component.dispatchMountComponent();
}

export default render;
