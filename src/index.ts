import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url:"./homero.png",name:"Homero"});
Loader.shared.add({url:"./papitas.png",name:"papitas"});

Loader.shared.onComplete.add(()=>{

	const homero: Sprite = Sprite.from("Homero");
	const papitas0: Sprite = Sprite.from("papitas");
	const papitas1: Sprite = Sprite.from("papitas");

	//console.log("Hola mundo!", clampy.width, clampy.height);

	//clampy.anchor.set(0.5);

	//homero.x = 0;
	homero.y = 50;

	papitas0.angle = 10;
	papitas0.position.set(250,50);
	papitas0.scale.set(0.75,0.75);

	papitas1.angle = -15;
	papitas1.position.set(550,0);
	papitas1.scale.set(0.75,0.75);

	const HomerEatPapitas: Container = new Container();

	HomerEatPapitas.addChild(homero);
	HomerEatPapitas.addChild(papitas0);
	HomerEatPapitas.addChild(papitas1);

	//HomerEatPapitas.scale.set(0.75);
	HomerEatPapitas.x = 0;
	HomerEatPapitas.y = 100;
	
	console.log(papitas1.toGlobal(new Point()));
	console.log(papitas1.parent.toGlobal(papitas1.position));

	app.stage.addChild(HomerEatPapitas);

})

Loader.shared.load();
