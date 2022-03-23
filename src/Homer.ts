import { Container, Sprite } from "pixi.js";

export class Homer extends Container{

    constructor (){
        super();
        
    const homero: Sprite = Sprite.from("Homero");
	
	//clampy.anchor.set(0.5);

	//homero.x = 0;
	homero.y = 50;

	//const HomerEatPapitas: Container = new Container();

	this.addChild(homero);
	
    }
}