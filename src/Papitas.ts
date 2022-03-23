import { Container, Point, Sprite } from "pixi.js";

export class Papitas extends Container{

    constructor (){
        super();
        
	const papitas0: Sprite = Sprite.from("papitas");
	const papitas1: Sprite = Sprite.from("papitas");

	//console.log("Hola mundo!", clampy.width, clampy.height);

	//clampy.anchor.set(0.5);


	papitas0.angle = 10;
	papitas0.position.set(250,50);
	papitas0.scale.set(0.75,0.75);

	papitas1.angle = -15;
	papitas1.position.set(550,0);
	papitas1.scale.set(0.75,0.75);

	//const HomerEatPapitas: Container = new Container();

	this.addChild(papitas0);
	this.addChild(papitas1);


	
	console.log(papitas0.toGlobal(new Point()));
	console.log(papitas0.parent.toGlobal(papitas1.position));
}
}