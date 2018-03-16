const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount() {
    while (true) {
      this.number = Number(prompt('Введите число символов клавиатуры'));
      if (this.number > 0 && Number.isInteger(this.number)) break;
      alert('неверный ввод,введите целое положительное число')
    }
  },
  task() {
    this.arr = [];
    for (let i = 0; i < this.number; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      this.arr.push(char);
    }
    return this.arr;
  },
  userInput() {
    this.arr =  (this.arr).join("");
    this.start = (prompt('Наберите строку ' + (this.arr)));
    return this.start;
  },
  userErrors() {
    let mistake = 0;
    let on = 0;
    for ( let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === this.start[i]) {
        on++
      } else {
        mistake++;
      }
    }
    console.log(mistake);
    return on == this.arr.length ? alert('Вы справились с заданием') : alert(`Вы совершили - ${mistake} ошибок. Успехов в последующих упражнениях!`);

  }
}

function run() {
  keyTrainer.charCount();
  keyTrainer.task();
  keyTrainer.userInput();
  keyTrainer.userErrors();
};

run();
