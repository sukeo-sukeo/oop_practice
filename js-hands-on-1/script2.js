'use strict'

$(function () {
  // ここにコードを記入
  class Element {
    constructor(tagName, text = "", id = "") {
      this.name = text;
      this.elm = Element.create(tagName, text, id);
      this.counter = 0;
    }

    static create(tagName, text, id) {
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
      console.log(
        `${this.name}をリセットしました`
      );
    }
  }
  
  const body = document.getElementsByTagName('body')[0]

  const btn1 = new Element('button', 'btn1', 'btn1')
  console.log(btn1);
  btn1.append(body)
  btn1.elm.addEventListener("click", (e) => {
    btn1.countUp();
  });

  const btn2 = new Element('button', 'btn2', 'btn2')
  console.log(btn2);
  btn2.append(body)
  btn2.elm.addEventListener("click", (e) => {
    btn2.countUp();
  });

  const cdBtn = new Element('button', 'cdBtn', 'cdBtn')
  console.log(cdBtn);
  cdBtn.append(body)
  cdBtn.elm.addEventListener("click", (e) => {
    btn1.countDown();
    btn2.countDown();
  });

  const resetBtn = new Element('button', 'reset', 'reset')
  console.log(resetBtn);
  resetBtn.append(body)
  resetBtn.elm.addEventListener("click", (e) => {
    btn1.reset(btn1);
    btn2.reset(btn2);
  });

  
});
