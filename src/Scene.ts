import { AnimatedSprite, Container, NineSlicePlane, Text, Sprite, Texture } from "pixi.js";
import { BasesStats } from "./BasesStats";
import { EstrellasVacias } from "./Estrellas";
import { Homer } from "./Homer";

export class Scene extends Container {
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

    const estrellallena0= Sprite.from("estrellallena");
    //this.addChild(estrellallena0);
    estrellallena0.scale.set(0.5);
    

    const estrellaVacia = new EstrellasVacias();
    //this.addChild(estrellaVacia);
    estrellaVacia.scale.set(0.5);
    
    
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
    
    
    const botones= Sprite.from("botones");
    this.addChild(botones);
    botones.position.y = 540;
    botones.position.x = 380;
    botones.scale.set(1.45);

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