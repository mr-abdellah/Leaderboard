import './style.css';
import Score from './module/Score.js';
import addScore from './module/addScore.js';
import { myScores, createScore } from './module/create.js';

const storage = JSON.parse(localStorage.getItem('scores')) || [];

for (let i = 0; i < storage.length; i += 1) {
  const newScore = new Score();
  newScore.name = storage[i].name;
  newScore.score = storage[i].score;
  myScores.push(newScore);
  createScore(myScores[i], myScores[i].name, myScores[i].score);
}

addScore();