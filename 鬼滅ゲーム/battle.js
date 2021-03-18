export class Battle {

  static setCommandBtns(commandList) {
    const body = document.getElementsByTagName("body")[0];
    let btns = [];
    commandList.forEach((command) => {
      const btn = document.createElement("button");
      btn.textContent = command;
      btn.setAttribute("id", command);
      body.appendChild(btn);
      btns.push(btn);
    });
    return btns;
  }

  static addEvent(commandBtns, allies, enemy) {
    [...commandBtns].forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const menu = btn.textContent;
        switch (menu) {
          case "たたかう":
            allies.doAttack(enemy.name);
            break;
          case "呼吸":
            allies.doDeathbolow(enemy.name);
            break;
          case "逃げる":
            console.log("3");
            break;
          default:
            break;
        }
      });
    });
  }

  constructor(allies, enemy, battleMnue) {
    this.commandList = battleMnue;
    this.commandBtns = Battle.setCommandBtns(this.commandList);
    Battle.addEvent(this.commandBtns, allies, enemy);
    console.log(`${enemy.name}が現れた!`);
    this.allies = allies;
    this.enemy = enemy;
    this.result = Boolean;
  }

}

