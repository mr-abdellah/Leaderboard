const myScores = [];
const createScore = (newScore, name, score) => {
  newScore.name = name;
  newScore.score = score;

  // Targeting the container
  const scoreContainer = document.querySelector('.recent-scores-container');

  const h2 = document.createElement('h2');
  h2.id = 'score-container';
  h2.innerHTML = `${name}: ${score}`;

  // append h2 to score container
  scoreContainer.appendChild(h2);
};
export { myScores, createScore };