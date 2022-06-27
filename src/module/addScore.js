import Score from './Score.js';
import { myScores, createScore } from './create.js';

// targeting inputs and button
const SubmitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

// add the click event to the submit btn

const addScore = () => {
  SubmitBtn.addEventListener('click', () => {
    const newScore = new Score();
    myScores.push(newScore);
    createScore(newScore, nameInput.value, scoreInput.value);
    newScore.add(myScores);
    Score.emptyField();
  });
};
export default addScore;