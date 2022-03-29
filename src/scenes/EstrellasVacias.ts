import { Container, Sprite } from "pixi.js";

export class EstrellasVacias extends Container{
    constructor (){
        super();
        

        const dialog = new Container();
        /*dialog.x = 1280/2;
        dialog.y = 720/2;*/

    const estrellaMid: Sprite = Sprite.from("estrellavacia");
    const estrellaIzq: Sprite = Sprite.from("estrellallena");
    const estrellaDer: Sprite = Sprite.from("estrellavacia");

    
    estrellaMid.position.x = dialog.width/2;
    estrellaMid.position.y = dialog.height/2;
    estrellaIzq.position.copyFrom(estrellaMid.position); 
    estrellaDer.position.copyFrom(estrellaMid.position); 

    //estrellaMid.anchor.set(1.5);
    estrellaMid.pivot.x = estrellaMid.width/2;
    estrellaMid.pivot.y = -550;

    estrellaDer.pivot = estrellaMid.pivot;
    estrellaIzq.pivot = estrellaMid.pivot;
    /*
    estrellaIzq.anchor.set(1.5);*/
    estrellaIzq.angle = 45;
    estrellaDer.angle = -45;
    /*
    estrellaDer.anchor.set(1.5);
    
    estrellaMid.anchor.set(0.5);
    
    console.log(estrellaMid.toGlobal(new Point()));
       
    */

    
    //console.log(estrellaMid.toGlobal(new Point()));
    console.log(estrellaMid.toGlobal(estrellaMid.pivot));
    //console.log(estrellaMid.parent.toGlobal(estrellaMid.pivot));

    dialog.addChild(estrellaMid, estrellaDer, estrellaIzq);
  

    this.addChild(dialog);

    }
}