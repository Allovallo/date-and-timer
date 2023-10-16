import '../css/common.css';
// import BSN from 'bootstrap.native';

// const refs = {
//   modal: document.querySelector('#myModal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// }
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPT = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
const modal = new BSN.Modal('#myModal');

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPT || hasSubscribed) {
//     console.log('Максимальна кількість набридів або підписався!');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Відкриваємо набридалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }