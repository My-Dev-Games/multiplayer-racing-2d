import {_decorator, BaseNode, Component, Node, v3} from 'cc';

const {ccclass, property} = _decorator;

/**
 * Predefined variables
 * Name = Camera
 * DateTime = Sun Jan 30 2022 18:41:35 GMT+0700 (Новосибирск, стандартное время)
 * Author = Cerberrion
 * FileBasename = Camera.ts
 * FileBasenameNoExtension = Camera
 * URL = db://assets/Scripts/Camera.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('Camera')
export class Camera extends Component {
  // [1]
  // dummy = '';

  // [2]
  @property(Node)
  player: Node;


  start() {


  }

  protected update(dt: number) {
    const positionPlayer = this.player.getPosition()
    this.node.setPosition(v3(positionPlayer.x, positionPlayer.y, 1000))
  }

  // update (deltaTime: number) {
  //     // [4]
  // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
