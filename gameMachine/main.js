'use strict'

class GameMachine {
  constructor(name, user) {
    this.name = name;
    this.user = user;
    this._No = GameMachine.getNo();
    this._power = false;
    console.log(`${user}の${name}が生成された！`);
  }

  static getNo() {
    return GameMachine.No++;
  }

  powerCheck() {
    console.log(this._power ? '電源入ってます' : '電源入ってません');
  }

  switchPower() {
    this._power = !this._power;
    if (this._power) {
      console.log(`電源オン！`);
    } else {
      console.log(`電源オフ！`);
    }
  }

  playGame(game) {
    if (this._power) {
      console.log(`${this.user}は${game}をやり始めた`);
    } else {
      console.log(`まずは${this.name}の電源を入れてください`);
    }
  }

  sayHello() {
    console.log("hello!");
  }
}

GameMachine.No = 0

const ps4 = new GameMachine('PS4', 'sukeo')
console.log(ps4);
ps4.playGame('ダークソウル３')
ps4.switchPower()
ps4.powerCheck()
ps4.playGame('ダークソウル３')
ps4.switchPower()
ps4.powerCheck()

console.log('---------------------------------');

const ns = new GameMachine('switch', 'ojamaru')
console.log(ns);
ns.playGame('マイクラ')
ns.switchPower()
ns.playGame('マイクラ')
ns.switchPower()

