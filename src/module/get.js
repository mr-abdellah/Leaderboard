const container = document.getElementById('recent-scores-container');
const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lxpoC6G6d9W60ZW2y6PR/scores/',
  );
  if (!response.ok) {
    throw new Error(`Something Went Wrong status: ${response.status}`);
  }
  const data = await response.json();

  let item = '';
  data.result.forEach((score) => {
    item += `<h2 id='score-container'>${score.user}: ${score.score}</h2>`;
  });
  container.innerHTML = item;
};
export default getData;