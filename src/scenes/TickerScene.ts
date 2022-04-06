import { AnimatedSprite, Container, Sprite, Texture} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";

export class TickerScene extends Container implements IUpdateable{


    private papitasAnimadas: AnimatedSprite;
    private homeroCompleto: Sprite = Sprite.from("homeroComp.png");

    constructor(){

        super();

        


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
    
        this.papitasAnimadas.x = 0;
        this.papitasAnimadas.y = 100;
        
    
        this.addChild(this.papitasAnimadas, this.homeroCompleto);
        


    }

    public update(_deltaTime:number, deltaFrame:number): void{
        this.papitasAnimadas.update(deltaFrame);
        this.papitasAnimadas.x += 10;
        
        
        console.log(deltaFrame);
    }
}