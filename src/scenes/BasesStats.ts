import { Container, NineSlicePlane, Text, Texture } from "pixi.js";

export class BasesStats extends Container {
    constructor (){
        super();

        const baseStats0 =new NineSlicePlane(
            Texture.from("base"),
            35,35,35,35
        );
        this.addChild(baseStats0);
        baseStats0.scale.set(1.4,1);
        /*baseStats0.width = 450;
        baseStats0.height = 150;*/
        //baseStats0.position.y = 10;

        const stars: Text = new Text ("1850", {fontSize: 35, fill: 0xf2f013, fontFamily:"Arial"});
    this.addChild(stars);
    /**/stars.position.y = 50;
    stars.position.x = 170;


        const baseStats1 =new NineSlicePlane(
            Texture.from("base"),
            35,35,35,35
        );
        this.addChild(baseStats1);
        baseStats1.scale.set(1.4,1);
        /*baseStats1.width = 450;
        baseStats1.height = 150;*/
        baseStats1.position.y = 90;

        const score: Text = new Text ("585", {fontSize: 35, fill: 0xf2f013, fontFamily:"Arial"});
    this.addChild(score);
    score.position.y = 140;
    score.position.x = 190;
    
    }
}