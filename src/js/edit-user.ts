import { handleForm } from '../utils/form';

console.log('edit-user page');

handleForm('edit-user');

const updateAvatarButton = document.querySelector<HTMLElement>('.avatar-overlay');
const updateAvatarModal = document.querySelector<HTMLElement>('.change-avatar-modal');
const updateAvatarModalCloseButton = document.querySelector<HTMLElement>('.change-avatar-modal__close');

function hideModal(val: boolean): void {
  updateAvatarModal!.hidden = val;
}

// open modal by click on avatar
updateAvatarButton!.addEventListener('click', (e) => {
  e.preventDefault();
  hideModal(false);
});

// close modal by click on modal close-cross
updateAvatarModalCloseButton!.addEventListener('click', (e) => {
  e.preventDefault();
  hideModal(true);
});

// close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideModal(true);
});
