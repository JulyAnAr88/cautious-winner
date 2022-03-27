import { Container, /*Point,*/ Sprite } from "pixi.js";

export class EstrellasVacias extends Container{
    constructor (){
        super();
        
    const estrellaVacia0: Sprite = Sprite.from("estrellavacia");
    const estrellaVacia1: Sprite = Sprite.from("estrellallena");
    const estrellaVacia2: Sprite = Sprite.from("estrellavacia");

    
    /*estrellaVacia0.position.x = 1280/2;
    estrellaVacia0.position.y = 720/2;  */
    estrellaVacia0.pivot.x = estrellaVacia0.width/2;
    estrellaVacia0.pivot.y = -550;
    //console.log(estrellaVacia0.toGlobal(new Point()));
    
    estrellaVacia1.position = estrellaVacia0.position;
    estrellaVacia1.pivot = estrellaVacia0.pivot;
    estrellaVacia1.angle = 45;
    
    estrellaVacia2.position = estrellaVacia0.position;
    estrellaVacia2.pivot = estrellaVacia0.pivot;
    estrellaVacia2.angle = -45;

    
    //console.log(estrellaVacia2.toGlobal(new Point()));
    //console.log(estrellaVacia2.parent.toGlobal(estrellaVacia0.position));

  
    this.addChild(estrellaVacia0);
    this.addChild(estrellaVacia1);
    this.addChild(estrellaVacia2);

    }
}