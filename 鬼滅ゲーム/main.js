'use strict'

class Characrtor {
  constructor(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
  }
  doAttack(to) {
    console.log(`${this.name}の攻撃！${to}に${this.atk}のダメージ`);
  }

  doDeathbolow(to) {
    let skill_type, skill_num, power, answer
    if (this.skill === '呼吸') {
      console.log(this.skill);
      skill_type = '水' //ランダムにする
      skill_num = '一' //ランダムにする
      answer = '水面斬り' //ランダムにする ひらがなOK
      power = 3 //入力速度に応じて決定する
      const reulst = prompt(`${skill_type}の呼吸${skill_num}の型...`, '技の名前を入力してください');
      if (reulst === answer) {
        console.log(`${skill_type}の呼吸${skill_num}の型... 「${answer}!!!!」`)
        console.log(`決まった！${to}に${this.atk * power}のダメージ!`)
      } else {
        return
      }
    }
    if (this.skill === '血鬼術') {
      console.log(this.skill);
      let skill = '破壊殺' //ランダムにする
      let power = 5 //ランダムにする
      console.log(`血鬼術...「${skill}」`)
      console.log(`${to}に${this.atk * power}のダメージ!`)
    }
    

  }
}

class Kisatutai extends Characrtor {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.skill = '呼吸'
  }
}

class Oni extends Characrtor {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.skill = '血鬼術'
  }
}

const tanjirou = new Kisatutai('炭治郎', 100, 50)
console.log(tanjirou);
tanjirou.doDeathbolow('あかざ')

const akaza = new Oni('あかざ', 300, 200)
console.log(akaza);
akaza.doAttack(tanjirou.name)
akaza.doDeathbolow(tanjirou.name)