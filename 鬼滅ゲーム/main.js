'use strict'

import {Kisatutai, Oni} from './charactor.js'
import {Battle} from './battle.js'

const battleMenue = ["たたかう", "呼吸", "逃げる"];

const tanjirou = new Kisatutai("炭治郎", 100, 50);
console.log(tanjirou);
tanjirou.createImg()

const akaza = new Oni("あかざ", 300, 200);
console.log(akaza);
// akaza.doAttack(tanjirou.name);
// akaza.doDeathbolow(tanjirou.name);

// const battle = new Battle(tanjirou, akaza, battleMenue);

function keyDownFanc(e, chara) {
  //押されたボタンに割り当てられた数値（すうち）を、key_codeに代入
  const key_code = e.keyCode;

  if (key_code === 37) chara.x -= 8; //「左ボタン」が押されたとき、xの値から32を引き算する
  if (key_code === 38) chara.y -= 8; //「上ボタン」が押されたとき、yの値から32を引き算する
  if (key_code === 39) chara.x += 8; //「右ボタン」が押されたとき、xの値に32を足し算する
  if (key_code === 40) chara.y += 8; //「下ボタン」が押されたとき、yの値に32を足し算する

  //りこちゃんの画像の位置（いち）を反映（はんえい）させる
  document.getElementById(chara.name).style.top = chara.y + "px";
  document.getElementById(chara.name).style.left = chara.x + "px";
  // requestAnimationFrame(keyDownFanc(e, chara))
}

addEventListener("keydown", e => keyDownFanc(e, tanjirou));