import { AnimatedSprite, Container, NineSlicePlane, Text, Sprite, Texture} from "pixi.js";
import { BasesStats } from "../scenes/BasesStats";
import { EstrellasVacias } from "./EstrellasVacias";
import { Homer } from "../scenes/Homer";
import { UIDemo } from "./UIDemo";

export class Scene extends Container {

    public static lastKeyPressed: Text;

    constructor(){
        super();
        
    const homer =new Homer();
    //HomerEatPapitas.scale.set(0.75);
	homer.x = 0;
	homer.y = 100;

    //this.addChild(homer);

    const papitasAnimadas: AnimatedSprite = new AnimatedSprite(
        [
            Texture.from("papitas"),
            Texture.from("papitas1"),
            Texture.from("papitas2"),
            Texture.from("papitas3"),
            Texture.from("papitas4"),
            Texture.from("papitas5"),
        ], true
    );

    papitasAnimadas.play();
    papitasAnimadas.animationSpeed = 0.05;

    papitasAnimadas.x = 0;
	papitasAnimadas.y = 100;

    //this.addChild(papitasAnimadas);

    const fondo= Sprite.from("fondo");
    fondo.scale.set(0.6);
    this.addChild(fondo);

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
    
    
    const botones= new UIDemo();
    this.addChild(botones);
    botones.position.y = 560;
    botones.position.x = 380;
    botones.scale.set(2.75);

    Scene.lastKeyPressed = new Text("Waiting...", {fontSize: 28, fill: 0xe61313});
    Scene.lastKeyPressed.anchor.set(0.5);
    Scene.lastKeyPressed.x = botones.x + 700;
    Scene.lastKeyPressed.y = botones.y + 120;

            
    this.addChild(Scene.lastKeyPressed);

    
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



    }

   
    
}