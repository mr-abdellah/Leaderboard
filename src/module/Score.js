export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add(myScores) {
    this.add = localStorage.setItem('scores', JSON.stringify(myScores));
  }

  static emptyField() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}