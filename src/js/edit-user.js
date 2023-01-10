'use strict';

import { handleForm } from './utils/form';

handleForm('edit-user');
console.log('edit-user page');

const updateAvatarButton = document.querySelector('.avatar-overlay');
const updateAvatarModal = document.querySelector('.change-avatar-modal');
const updateAvatarModalCloseButton = document.querySelector('.change-avatar-modal__close');

function handleModal(val) {
  updateAvatarModal.hidden = val;
}


updateAvatarButton.addEventListener('click', (e) => {
  e.preventDefault();
  handleModal(false);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      handleModal(true);
      window.removeEventListener('keydown');
    }
  });
});

updateAvatarModalCloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  handleModal(true);
  window.removeEventListener('keydown');
});

