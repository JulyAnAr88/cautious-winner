import { Container, Sprite, Texture } from "pixi.js";
import { Scene } from "../scenes/Scene";

export class Button extends Container{

    private def:Texture;
    private down:Texture;
    private over:Texture;

    private spr:Sprite;
    private nameButton:string;



constructor(def:Texture, down:Texture, over: Texture, name:string){
    super();
    this.def = def;
    this.over = over;
    this.down = down;
    this.nameButton = name;

    this.spr = Sprite.from(def);
    //this.spr.anchor.set(0.5);
    this.addChild(this.spr);

    this.spr.interactive = true;
    this.spr.on("pointerdown", this.onMouseDown, this);
    this.spr.on("pointerup", this.onMouseUp, this);
    this.spr.on("pointerover", this.onMouseOver, this);
    this.spr.on("pointerover", this.onMouseOut, this);


};

private onMouseDown(): void {
    this.spr.texture = this.down;
   
}

private onMouseOver():void{
    this.spr.texture = this.over;
    
}

private onMouseOut():void{
    this.spr.texture = this.def;
    
}

private onMouseUp(): void {
    this.emit("buttonClick");
    this.spr.texture = this.def;
    Scene.lastKeyPressed.text = "Presionaste " + this.nameButton;
}


}