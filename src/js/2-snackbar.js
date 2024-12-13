// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const btn = document.querySelector('button');
const formLabel = form.querySelector('label input');
const radioFulfilled = form.querySelector('fieldset>label:first-of-type input');
const radioRejected = form.querySelector('fieldset>label:last-of-type input');
const delayInput = form.querySelector('input[name="delay"]');

const makePromis = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(delayInput.value);
  const state = radioFulfilled.checked ? 'fulfilled' : 'rejected';

  makePromis(delay, state)
    .then(message => {
      iziToast.success({ title: 'succes', message });
    })
    .catch(error => {
      iziToast.error({ title: 'error', message: error });
    });
    e.target.reset()
});
