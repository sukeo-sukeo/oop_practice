$(function(){
  // ここにコードを記入
  class Button {
    constructor(btnName) {
      this.dom = this.create(btnName)
      this.counter = 0
    }

    create(btnName) {
      const btn = document.createElement("button")
      btn.textContent = btnName
      return btn
    }

    appendDOM(type, selector, appendDOM) {
      let dom
      switch (type) {
        case 'id':
          dom = document.getElementById(selector);
          break;
        case 'class':
          dom = document.getElementsByClassName(selector)[0];
          break;
        case 'tag':
          dom = document.getElementsByTagName(selector)[0];
          break;
        default:
          break;
      }
      dom.appendChild(appendDOM)
    }
    click(dom, method) {
      dom.addEventListener('click', e => {
        dom.method(dom)
      })
    }

    countUp(btn) {
      this.counter++
      console.log(`${btn.dom.textContent}は${this.counter}回クリックされました`);
    }

    countDown(btn) {
      this.counter--
      console.log(`${btn.dom.textContent}は${this.counter}回に減りました`);
    }

    reset(btn) {
      this.counter = 0
      console.log(`${btn.dom.textContent}を${this.counter}回にリセットしました`);
    }
  }

  const btn1 = new Button('button1')
  btn1.appendDOM('tag', 'body', btn1.dom)
  btn1.dom.addEventListener("click", (e) => {
    btn1.countUp(btn1);
  });

  const btn2 = new Button('button2')
  btn2.appendDOM('tag', 'body', btn2.dom)
  btn2.dom.addEventListener("click", (e) => {
    btn2.countUp(btn2);
  });

  const cdBtn = new Button('Count Down')
  cdBtn.appendDOM('tag', 'body', cdBtn.dom)
  cdBtn.dom.addEventListener('click', e => {
    btn1.countDown(btn1)
    btn2.countDown(btn2)
  })
  
  const resetBtn = new Button('Reset')
  resetBtn.appendDOM('tag', 'body', resetBtn.dom)
  resetBtn.dom.addEventListener('click', e => {
    btn1.reset(btn1)
    btn2.reset(btn2)
  })
  

});
