'use strict';

import { handleForm } from './utils/form';

handleForm('registration');



// import ejs from 'ejs';

// const inputs = [
//   {
//     label: 'Почта',
//     id: 'registration__email',
//     type: 'email',
//     name: 'email',
//     value: 'pochta@yandex.ru',
//   },
//   {
//     label: 'Логин',
//     id: 'registration__login',
//     type: 'text',
//     name: 'login',
//     value: 'ivanivanov',
//   },
//   {
//     label: 'Имя',
//     id: 'registration__first-name',
//     type: 'text',
//     name: 'first_name',
//     value: 'Иван',
//   },
//   {
//     label: 'Фамилия',
//     id: 'registration__second-name',
//     type: 'text',
//     name: 'second_name',
//     value: 'Иванов',
//   },
//   {
//     label: 'Телефон',
//     id: 'registration__phone',
//     type: 'text',
//     name: 'phone',
//     value: '+7 (909) 967 30 30',
//   },
//   {
//     label: 'Пароль',
//     id: 'registration__password',
//     type: 'password',
//     name: 'password',
//     value: 'ivanivanov',
//   },
//   {
//     label: 'Пароль (ещё раз)',
//     id: 'registration__password-repeat',
//     type: 'password',
//     name: 'password-repeat',
//     value: 'ivanivanov',
//   }
// ];

// let people = ['geddy', 'neil', 'alex'];
// let html = ejs.render('<%= inputs.join(", "); %>', { inputs: inputs });
// console.log(html);
