import './style.css';
import getData from './module/get.js';
import getResponse from './module/post.js';

const refreshBtn = document.getElementById('refresh');
const SubmitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

refreshBtn.addEventListener('click', () => {
  getData();
});

// add the click event to the submit btn

SubmitBtn.addEventListener('click', () => {
  const scoreInfo = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  getResponse(scoreInfo);

  nameInput.value = '';
  scoreInput.value = '';
});