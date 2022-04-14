import { AnimatedSprite, Container,  Sprite,  Texture} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { IUpdateable } from "../utils/IUpdateable";


export class TickerScene extends Container implements IUpdateable{


    private papitasAnimadas: AnimatedSprite;
    private homeroCompleto: /**/ AnimatedSprite;
    private dvd: Sprite;


    public speed :number = 50;
    private physRebotador: PhysicsContainer;


    constructor(){

        super();
        
       this.homeroCompleto = new AnimatedSprite (
            [
                Texture.from("homeroComp"),
                Texture.from("homeroComp1"),
                Texture.from("homeroComp"),
                Texture.from("homeroComp2"),
                
            ], true
        );
        this.homeroCompleto.play();
        this.homeroCompleto.animationSpeed = 0.01;
        
        this.homeroCompleto.x = -5;
        /*homeroCompleto.y = 100;
        const homeroCompleto= Sprite.from("homeroComp.png");
       */
        
        
        
        this.papitasAnimadas = new AnimatedSprite(
            [
                Texture.from("papitas"),
                Texture.from("papitas1"),
                Texture.from("papitas2"),
                Texture.from("papitas3"),
                Texture.from("papitas4"),
                Texture.from("papitas5"),
            ], true
        );
    
        this.papitasAnimadas.play();
        this.papitasAnimadas.animationSpeed = 0.01;
    
        this.papitasAnimadas.x = 400;
        this.papitasAnimadas.y = 150;
        this.papitasAnimadas.scale.set(0.5);

        this.dvd= Sprite.from("dvd");
        //this.dvd.anchor.set(0.5,1);
        this.dvd.scale.set(0.5);
            
        
        this.physRebotador = new PhysicsContainer;
        this.physRebotador.speed.x = 150;
        this.physRebotador.speed.y = 20;
        this.physRebotador.acceleration.y = 50;
        this.addChild(this.physRebotador);

        //this.physRebotador.addChild(this.papitasAnimadas, this.homeroCompleto);
        this.physRebotador.addChild(this.dvd);



    }

    public update(deltaTime:number, deltaFrame:number): void{
        
        const dt = deltaTime / 1000;

        this.physRebotador.update(dt);
        
        this.papitasAnimadas.update(deltaFrame);

        this.homeroCompleto.update(deltaFrame);

        if (this.physRebotador.x > (WIDTH-this.dvd.width)){
            this.physRebotador.x = WIDTH-this.dvd.width;
            this.physRebotador.speed.x = Math.abs(this.physRebotador.speed.x) * -1;
            //this.physRebotador.scale.x = -1;
            this.dvd.tint = 0xFF0000;
            
        } else if (this.physRebotador.x < 0)
        { 
            this.physRebotador.x = 0;
            this.physRebotador.speed.x = Math.abs(this.physRebotador.speed.x);
            //this.physRebotador.scale.x = 1;
            this.dvd.tint = 0xFF00FF;
        }

        if (this.physRebotador.y > (HEIGHT-this.dvd.height)){
            this.physRebotador.y = HEIGHT-this.dvd.height;
            this.physRebotador.speed.y = Math.abs(this.physRebotador.speed.y) * -1;
            this.dvd.tint = 0x00FF00;
        }else if (this.physRebotador.y < 0)
        { 
            this.physRebotador.y = 0;
            this.physRebotador.speed.y = Math.abs(this.physRebotador.speed.y);
            
            this.dvd.tint = 0x00FFFF;
        }

        
    }
}