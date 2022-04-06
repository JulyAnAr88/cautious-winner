import { Container, Sprite} from "pixi.js";

import { Homer } from "../scenes/Homer";
//import { UIDemo } from "./UIDemo";

export class Scene extends Container {

   

    constructor(){
        super();
        
        const fondo= Sprite.from("fondo");
        fondo.scale.set(0.6);
        this.addChild(fondo);
    
    
        const homer =new Homer();
    //HomerEatPapitas.scale.set(0.75);
	homer.x = 0;
	homer.y = 100;

    this.addChild(homer);

    

    
    
    
    
    /*const botones= new UIDemo();
    this.addChild(botones);*/

    }

   
    
}