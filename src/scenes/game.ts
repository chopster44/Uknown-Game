import "phaser"; 
var player;
export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        });
    }
    
    preload(): void {
        //get all assets
        this.load.image('player', '../assets/SpriteA.png');
    }
    create(): void {
        player = this.physics.add.sprite(50, 200, 'player');
    }
    update(time): void {
        
    }
}