import cc, {
  _decorator,
  Component,
  Node,
  systemEvent,
  EventKeyboard,
  SystemEvent,
  macro,
  RigidBody2D,
  v2,
} from 'cc';

const {ccclass, property} = _decorator;

/**
 * Predefined variables
 * Name = Car
 * DateTime = Fri Jan 28 2022 12:06:23 GMT+0700 (Новосибирск, стандартное время)
 * Author = Cerberrion
 * FileBasename = Car.ts
 * FileBasenameNoExtension = Car
 * URL = db://assets/Scripts/Car.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('Car')
export class Car extends Component {
  private speed: number = 10
  private travelDirection: number = 0
  private accelerationDirection: number = 0
  private rigidBody: Component;

  onLoad() {
    systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
    systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);

    this.rigidBody = this.getComponent(RigidBody2D)
    window.test = this.rigidBody
    console.log(this.rigidBody);
  }

  onKeyPressed(e: EventKeyboard) {
    let keyCode = e.keyCode
    switch (keyCode) {
      case macro.KEY.up:
      case macro.KEY.w:
        this.accelerationDirection = 1
        console.log('UP')
        break;
      case macro.KEY.down:
      case macro.KEY.s:
        this.accelerationDirection = -1
        console.log('DOWN')
        break;
      case macro.KEY.left:
      case macro.KEY.a:
        this.travelDirection = 10
        console.log('LEFT')
        break;
      case macro.KEY.right:
      case macro.KEY.d:
        this.travelDirection = -10
        console.log('RIGHT')
        break;
    }

  }

  onKeyReleased(e: EventKeyboard) {
    let keyCode = e.keyCode
    switch (keyCode) {
      case macro.KEY.up:
      case macro.KEY.w:
      case macro.KEY.down:
      case macro.KEY.s:
        this.accelerationDirection = 0
        console.log('UP_UP or UP_DOWN')
        break;
      case macro.KEY.left:
      case macro.KEY.a:
      case macro.KEY.right:
      case macro.KEY.d:
        this.travelDirection = 0
        console.log('UP_RIGHT or UP_LEFT')
        break;
    }
  }

  start() {

  }

  update(deltaTime: number) {
    if (this.accelerationDirection != 0) {
      //Math.tan(this.node.angle * Math.PI / 180)
      this.rigidBody.applyForceToCenter(v2(Math.tan(this.node.angle * Math.PI / 180)*this.speed, this.accelerationDirection*this.speed), true)
    } else {
      this.rigidBody.applyForceToCenter(v2(0, 0), true)
    }

    if(this.travelDirection !==0) {
      this.node.angle += this.travelDirection
    }
  }
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
