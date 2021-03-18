'use strict'

export class Charactor {
  constructor(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.x = 0
    this.y = 0
  }

  createImg() {
    const body = document.getElementsByTagName("body")[0];
    const img = document.createElement("img");
    img.setAttribute("src", `./img/${this.name}.png`);
    img.setAttribute("id", this.name);
    img.setAttribute("style", 'position:absolute;');
    body.appendChild(img);
    return img;
  }

  doAttack(to) {
    console.log(`${this.name}の攻撃！${to}に${this.atk}のダメージ`);
  }
}

export class Kisatutai extends Charactor {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.skill = "呼吸";
  }

  doDeathbolow(to) {
    let skill_type, skill_num, power, answer;
    skill_type = "水"; //ランダムにする
    skill_num = "一"; //ランダムにする
    answer = "水面斬り"; //ランダムにする ひらがなOK
    power = 3; //入力速度に応じて決定する
    const reulst = prompt(
      `${skill_type}の呼吸${skill_num}の型...`,
      "技の名前を入力してください"
    );
    if (reulst === answer) {
      console.log(`${skill_type}の呼吸${skill_num}の型... 「${answer}!!!!」`);
      console.log(`決まった！${to}に${this.atk * power}のダメージ!`);
    } else {
      return;
    }
  }
}

export class Oni extends Charactor {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.skill = "血鬼術";
  }
  doDeathbolow(to) {
    let skill = "破壊殺"; //ランダムにする
    let power = 5; //ランダムにする
    console.log(`血鬼術...「${skill}」`);
    console.log(`${to}に${this.atk * power}のダメージ!`);
  }
}

