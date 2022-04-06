import { Container, Texture, Sprite, Text, NineSlicePlane } from "pixi.js";
import { BasesStats } from "../scenes/BasesStats";
import { EstrellasVacias } from "./EstrellasVacias";
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";

export class UIDemo extends Container {

    private buttonReturn:Button;
    private buttonHome:Button;
    private buttonRight:Button;

    public static lastKeyPressed: Text;
      
    
    constructor(){
        super();
        const dialog = new Container();
        /*dialog.x = 100;
        dialog.y = 50;*/
        dialog.position.y = 560;
    dialog.position.x = 380;
    dialog.scale.set(2.75);
    
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

        //Nine-slice Plane
    const plaquita =new NineSlicePlane(
        Texture.from("plaquita"),
        35,35,35,35
    );

    this.addChild(plaquita);
    plaquita.width = 400;
    plaquita.height = 320;
    plaquita.scale.set(2);
    plaquita.position.x = 225;
    plaquita.position.y = 20;

    const titulo = new NineSlicePlane(
        Texture.from("titulo"),
        35,35,35,35
    );
    this.addChild(titulo);
    titulo.width = 1280;
    titulo.height = 320;
    titulo.scale.set(0.5);
    titulo.position.y = 5;
    titulo.position.x = 400;

    
    const estrellasVacias = new EstrellasVacias();
    this.addChild(estrellasVacias);
    /*estrellasVacias.pivot.x = estrellasVacias.width/2;
    estrellasVacias.pivot.y = 500;
    estrellasVacias.position.set(850,180);set(600,50)*/
    estrellasVacias.position.x = plaquita.x + 400;
    estrellasVacias.position.y = titulo.y + 45;
    
    estrellasVacias.scale.set(0.25);
    
    
    const base0= new BasesStats();
    this.addChild(base0);
    base0.position.y = 270;
    base0.position.x = 510;
    
    /*base0.height = 350;
    base0.width = 800;*/
    base0.scale.set(1.5);

  
    const cruz= Sprite.from("cruz");
    /*const cruz = new NineSlicePlane(
        Texture.from("cruz"),
        35,35,35,35
    );*/
    this.addChild(cruz);
    cruz.position.x = 930;
    cruz.position.y = -55;
    cruz.scale.set(5);





    UIDemo.lastKeyPressed = new Text("Waiting...", {fontSize: 28, fill: 0xe61313});
    UIDemo.lastKeyPressed.anchor.set(0.5);
    UIDemo.lastKeyPressed.x = dialog.x + 700;
    UIDemo.lastKeyPressed.y = dialog.y + 120;

            
    this.addChild(UIDemo.lastKeyPressed);

    
    const star= Sprite.from("star");
    this.addChild(star);
    star.scale.set(1.5);
    star.position.x = 600;
    star.position.y = 420;

    const medal= Sprite.from("medal2");
    this.addChild(medal);
    medal.scale.set(1.5);
    medal.position.x = 600;
    medal.position.y = 300;


    //Text
    const lvlComplete: Text = new Text ("Nivel completo", {fontSize: 80, fill: 0xe61313, fontFamily:"Arial"});
    this.addChild(lvlComplete);
    lvlComplete.position.y = 35;
    lvlComplete.position.x = 450;

    const score: Text = new Text ("Puntos", {fontSize: 75, fill: 0xe61313, fontFamily:"Arial"});
    this.addChild(score);
    score.position.y = 335;
    score.position.x = 340;

    const stars: Text = new Text ("Estrellas", {fontSize: 75, fill: 0xe61313, fontFamily:"Arial"});
    this.addChild(stars);
    stars.position.y = 465;
    stars.position.x = 340;




        this.addChild(dialog);
    }
    
    private onButtonClick(){
        //console.log("boton clickeado ", /*Keyboard.state.get("KeyA")*/this);
        
    }
    
    private onKeyB(): void{
        console.log("aprete la Z", this);
    }
    
    private onKeyUpB(): void{
        console.log("solte la Z", this);
    }
}