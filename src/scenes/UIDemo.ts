import { Container, Texture } from "pixi.js";
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";

export class UIDemo extends Container {

    private buttonReturn:Button;
    private buttonHome:Button;
    private buttonRight:Button;

    
      
    
    constructor(){
        super();
        const dialog = new Container();
        /*dialog.x = 100;
        dialog.y = 50;*/
    
        this.buttonReturn = new Button(
            Texture.from("bReturn"),
            Texture.from("bReturnPress"),
            Texture.from("bReturn"),
            "Return");
            this.buttonReturn.on("buttonClick",this.onButtonClick, this);
        dialog.addChild(this.buttonReturn);

        this.buttonHome = new Button(
            Texture.from("bHome"),
            Texture.from("bHomePress"),
            Texture.from("bHome"),     
            "Home");
        this.buttonHome.on("buttonClick",this.onButtonClick, this);
        this.buttonHome.x = this.buttonReturn.x + 60; 
        dialog.addChild(this.buttonHome);

        this.buttonRight = new Button(
            Texture.from("bRight"),
            Texture.from("bRightPress"),
            Texture.from("bRight"),   
            "Right");
        this.buttonRight.x = this.buttonHome.x + 60;
        this.buttonRight.on("buttonClick",this.onButtonClick.bind(this), this);
        dialog.addChild(this.buttonRight, this.buttonHome, this.buttonRight);

        Keyboard.down.on("KeyZ", this.onKeyB, this);
        Keyboard.up.on("KeyZ", this.onKeyUpB, this);

        this.addChild(dialog);
    }
    
    private onButtonClick(){
        console.log("boton clickeado ", /*Keyboard.state.get("KeyA")*/this);
        
    }
    
    private onKeyB(): void{
        console.log("aprete la Z", this);
    }
    
    private onKeyUpB(): void{
        console.log("solte la Z", this);
    }
}