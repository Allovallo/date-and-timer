import '../css/common.css';
import BSN from 'bootstrap.native';

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPT = 3;
let modal = new BSN.Modal(
  '#myModal', // target selector
  { // options object
    backdrop: 'static', // we don't want to dismiss Modal when Modal or backdrop is the click event target
    keyboard: false // we don't want to dismiss Modal on pressing [Esc] key
  }
);

console.log(modal);
modal.show();

let promptCounter = 0;
let hasSubscribed = false;

const intevalId = setInterval(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPT) {
        console.log('Зупиняємо інтервал!');
        clearInterval(intevalId);
        return;
    }
    console.log('Підпишісь на розсилку');
    promptCounter += 1;
    console.log(promptCounter);
}, PROMPT_DELAY);