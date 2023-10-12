import '../css/common.css';

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPT = 3;

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