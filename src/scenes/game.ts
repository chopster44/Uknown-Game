import "phaser"; 
var player;
var keyA, keyD, keySPACE;
var Gravity: number = 50;
var JumpDelay: number = 0;
export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        });
    }
    
    preload(): void {
        // load player sprite
        this.load.image('player', '../assets/SpriteA.png');
    }
    create(): void {
        // display player sprite
        player = this.physics.add.sprite(50, 200, 'player');
        
        // player physics
        player.setCollideWorldBounds(true);

        // inputs
        keyA = this.input.keyboard.addKey('A');
        keyD = this.input.keyboard.addKey('D');
        keySPACE = this.input.keyboard.addKey('SPACE');
    }
    update(time): void {
        if (keyA.isDown) {
            player.setVelocity(-200, 0);
        }
        else if (keyD.isDown) {
            player.setVelocity(200, 0);
        }
        else if (keySPACE.isDown && JumpDelay === 0) {
            player.setVelocity(0, -400);
            JumpDelay = 5;
        }
        else {
            player.setVelocity(0, Gravity);
        }

        if (JumpDelay < 0) {
            JumpDelay -= 1;
        }
    }
}