import { Container, Point, Sprite } from "pixi.js";

export class EstrellasVacias extends Container{
    constructor (){
        super();
        
    const estrellaVacia0: Sprite = Sprite.from("estrellavacia");
    const estrellaVacia1: Sprite = Sprite.from("estrellavacia");
    const estrellaVacia2: Sprite = Sprite.from("estrellavacia");

    
    //estrellaVacia0.angle = -30;
    //estrellaVacia0.pivot.set(-1280/2,-720/2);
    estrellaVacia0.pivot.set(-1280/2,-720/2);
    console.log(estrellaVacia0.toGlobal(new Point()));
    

    estrellaVacia1.pivot.set(-1280/2,-720/2);
    

    estrellaVacia2.rotation = 30;
    estrellaVacia2.pivot.set(-1280/2,-720/2);
    console.log(estrellaVacia2.toGlobal(new Point()));
    //console.log(estrellaVacia2.parent.toGlobal(estrellaVacia0.position));

  
    this.addChild(estrellaVacia0);
    //this.addChild(estrellaVacia1);
    this.addChild(estrellaVacia2);

    }
}