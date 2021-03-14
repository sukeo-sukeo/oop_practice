'use strict'

$(function () {
  // ここにコードを記入
  class Element {
    constructor(text, id, tagName) {
      this.name = text;
      this.elm = Element.create(text, id, tagName);
      this.counter = 0;
    }

    static create(text, id, tagName) {
      const elm = document.createElement(tagName);
      elm.textContent = text;
      if (id) {
        elm.setAttribute("id", id);
      }
      return elm;
    }

    append(place) {
      place.appendChild(this.elm);
    }
  }
  

  class Button extends Element {
    constructor(text, id, tagName = 'button') {
      super(text, id, tagName);
      console.log(`${this.name}が生成されました`);
    }
    countUp() {
      this.counter++;
      console.log(`${this.name}は${this.counter}回クリックされました！`);
    }

    countDown() {
      this.counter--;
      console.log(`${this.name}は${this.counter}回に減りました`);
    }

    reset() {
      this.counter = 0;
      console.log(`${this.name}をリセットしました`);
    }
  }


  const body = document.getElementsByTagName('body')[0]

  const btn1 = new Button('btn1', 'btn1')
  console.log(btn1);
  btn1.append(body)
  btn1.elm.addEventListener("click", (e) => {
    btn1.countUp();
  });

  const btn2 = new Button('btn2', 'btn2')
  console.log(btn2);
  btn2.append(body)
  btn2.elm.addEventListener("click", (e) => {
    btn2.countUp();
  });

  const cdBtn = new Button('cdBtn', 'cdBtn')
  console.log(cdBtn);
  cdBtn.append(body)
  cdBtn.elm.addEventListener("click", (e) => {
    btn1.countDown();
    btn2.countDown();
  });

  const resetBtn = new Button('reset', 'reset')
  console.log(resetBtn);
  resetBtn.append(body)
  resetBtn.elm.addEventListener("click", (e) => {
    btn1.reset(btn1);
    btn2.reset(btn2);
  });

  const p = new Element("継承をやってみたよ", "", "p");
  console.log(p);
  p.append(body)
  
});
