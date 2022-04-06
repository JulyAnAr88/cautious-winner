import { AnimatedSprite, Container,  Texture} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";


export class TickerScene extends Container implements IUpdateable{


    private papitasAnimadas: AnimatedSprite;
    private homeroCompleto: /*Sprite*/ AnimatedSprite;

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
        this.homeroCompleto.animationSpeed = 0.05;
        
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
        this.papitasAnimadas.animationSpeed = 0.05;
    
        this.papitasAnimadas.x = 400;
        this.papitasAnimadas.y = 150;
        this.papitasAnimadas.scale.set(0.5);
        
            
        this.addChild(this.papitasAnimadas, this.homeroCompleto);
        


    }

    public update(_deltaTime:number, deltaFrame:number): void{
        this.papitasAnimadas.update(deltaFrame);
        this.papitasAnimadas.x += 5;

        this.homeroCompleto.update(deltaFrame);
        this.homeroCompleto.x += 2;
        
        
        console.log(deltaFrame);
    }
}