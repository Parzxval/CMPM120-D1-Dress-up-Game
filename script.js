class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }
    preload() 
    {
        this.load.path = 'assets/';
        this.load.image('firstBackdrop', 'firstBackdrop.png');
        this.load.audio('theme', 'audiotrack.mp3');
    }
    create() 
    {
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xff9900, 1);

        this.firstBackdrop = this.add.image(675, 350, 'firstBackdrop');
        this.firstBackdrop.setScale(1.4);

        this.sound.play('theme', { loop: true});
        this.sound.setVolume(0.5);

        this.graphics.fillGradientStyle(0x104574ff, 1, 0x387ebeff, 1);
        this.newRect = this.graphics.fillRect(30, 330, 320, 75);
        
        this.newRect.textObject = this.add.text(50, 350, 'Present your game...',
            {font: "30px Arial", color: "#dddddd"}
        );
        
        this.newRect.setDepth(1);
        this.newRect.textObject.setDepth(1);

        this.newButton = this.add.rectangle(190, 368, 320, 75, 0x000000, 0);
        this.newButton.setDepth(1);
        this.newButton.setInteractive({useHandCursor: true});
        this.newButton.on('pointerdown', () => this.scene.start('Scene2'));

    }
    update() {}

}

class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }
    preload()
    {
        this.load.path = 'assets/';
        this.load.image('secondBackdrop', 'secondBackdrop.png');
    }
    create()
    {
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xff9900, 1);

        this.secondBackdrop = this.add.image(675, 350, 'secondBackdrop');
        this.secondBackdrop.setScale(1.4);

        this.graphics.fillGradientStyle(0x104574ff, 1, 0x387ebeff, 1);
        this.newRect = this.graphics.fillRect(35, 340, 350, 90, 0x000000, 0);
        this.newRect.setDepth(1);
       
        this.textObject = this.add.text(50, 350, "Erm.\nI don't have a game idea...",
            {font: "30px Lobster", color: "#dddddd"});

        this.textObject.alpha = 0;
        this.textObject.setDepth(1);

        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            duration: 500,
            ease: 'Linear',
        });


        this.newButton = this.add.rectangle(210, 385, 350, 90, 0x000000, 0);
        this.newButton.setDepth(1);
        this.newButton.setInteractive({useHandCursor: true});
        this.newButton.on('pointerdown', () => this.scene.start('Scene3'));
    }
    update() 
    {}
}

class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }
    preload()
    {
        this.load.path = 'assets/';
        this.load.image('thirdBackdrop', 'thirdBackdrop.png');
        this.load.image('plzText', 'plz.png');
    }
    create()
    {
        this.graphics = this.add.graphics();

        this.graphics.fillStyle(0xff9900, 1);

        this.thirdBackdrop = this.add.image(675, 350, 'thirdBackdrop');
        this.thirdBackdrop.setScale(1.4);

        this.textObject = this.add.text(50, 100, "So let's play",
            {font: "50px Lobster", color: "#dddddd"});

        this.graphics.fillGradientStyle(0x104574ff, 1, 0x387ebeff, 1);
        this.newRect = this.graphics.fillRect(35, 445, 175, 100, 0x000000, 0);
        this.newRect.setDepth(1);
        this.newRect.alpha = 0;

        this.secondTextObj = this.add.text(55, 460, "Are you\nserious...",
            {font: "30px Arial", color: "#dddddd"});
        this.secondTextObj.setDepth(1);
        this.secondTextObj.alpha = 0;

        
        this.textObject.alpha = 0;
        this.textObject.setDepth(1)

        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
        });

        this.plzText = this.add.image(-400, 275, 'plzText');
        this.plzText.setScale(0.25);
        this.plzText.setDepth(1);

        this.tweens.add({
            targets: this.plzText,
            x: 375,
            y: 275,
            delay: 1000,
            duration: 1000,
            ease: 'Linear',
        })

        this.tweens.add({
            targets: [this.newRect, this.secondTextObj],
            alpha: 1,
            delay: 2000,
            duration: 1000,
            ease: 'Linear',
        });

        this.newButton = this.add.rectangle(125, 495, 175, 100, 0x000000, 0);
        this.newButton.setDepth(1);
        this.newButton.setInteractive({useHandCursor: true});
        this.newButton.on('pointerdown', () => this.scene.start('Scene4'));

    }
    update()
    {}
}

class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
    }

    preload() 
    {
        this.load.path = 'assets/';
        this.load.image('mainStage', 'Main Stage.png');
        
        this.load.image('hair1', 'Hair 1.png');
        this.load.image('hair2', 'Hair 2.png');
        this.load.image('hair3', 'Hair 3 (1).png');
        this.load.image('dress1', 'red dress.png');
        this.load.image('dress2', 'white dress.png');
        this.load.image('fit3', 'fit 2.png');
        this.load.image('earrings', 'earrings.png');

        this.load.image('model', 'pose 2.png');

        this.load.image('forwardButton', 'forward (2).png');
        this.load.image('backwardButton', 'backward (2).png');
        this.load.image('switchClothesButton', 'clothesbutton.png');
        this.load.image('switchHairButton', 'hairbutton.png');
        this.load.image('doneButton', 'donebutton.png');
    }

    create()
    {
        this.mainStage = this.add.image(675, 350, 'mainStage');
        this.mainStage.setScale(1.4);

        this.model = this.add.image(650, 350, 'model');
        this.model.setScale(0.19);

        this.forwardButton = this.add.image(1000, 350, 'forwardButton');
        this.forwardButton.setScale(0.5);
        this.forwardButton.setInteractive({useHandCursor: true});

        this.backwardButton = this.add.image(350, 350, 'backwardButton');
        this.backwardButton.setScale(0.5);
        this.backwardButton.setInteractive({useHandCursor: true});

        this.switchButton = this.add.image(1200, 150, 'switchClothesButton');
        this.switchButton.setScale(0.7);
        this.switchButton.setInteractive({useHandCursor: true});

        this.doneButton = this.add.image(1200, 575, 'doneButton');
        this.doneButton.setScale(0.7);
        this.doneButton.setInteractive({useHandCursor: true});

        this.doneButton.on('pointerdown', () => {
            console.log('done button clicked');
            this.scene.start('Scene5');
        });

        this.assetType = 0; //even is hair odd is fit
        
        this.switchButton.on('pointerdown', () => {
            console.log('switch button clicked');
            this.switchButton.setTexture(this.assetType % 2 === 0 ? 'switchHairButton' : 'switchClothesButton');
            this.assetType++;
        });

        this.hairstyles = ['hair1', 'hair2', 'hair3'];
        this.dresses = ['dress1', 'dress2', 'fit3'];
        this.currHairIndex = 0;
        this.currHair = null;
        this.currFitIndex = 0;
        this.currFit = null;


        this.forwardButton.on('pointerdown', () => {
            console.log('forward button clicked');

            if (this.assetType % 2 === 0) 
            {
            
                if (this.currHair) 
                {
                    this.removeHairStyle('forward', this.currHair);
                }

                this.forwardClickedHair(this.hairstyles[this.currHairIndex]);

                if (this.currHairIndex < this.hairstyles.length - 1) 
                {
                    this.currHairIndex++;
                } 
                else 
                {
                    this.currHairIndex = 0;
                }
            } 
        else if (this.assetType % 2 === 1)
        {

            if (this.currFit) 
            {
                this.removeFit('forward', this.currFit);
            }   

            this.forwardClickedFit(this.dresses[this.currFitIndex]);

            if (this.currFitIndex < this.dresses.length - 1) 
            {
                this.currFitIndex++;
            } 
            else 
            {
                this.currFitIndex = 0;
            }
        }
    });


        this.backwardButton.on('pointerdown', () => {
        console.log('backward button clicked');

        if (this.assetType % 2 === 0) 
        {

            if(this.currHair) {
                this.removeHairStyle('backward', this.currHair);
            }

            this.backwardClickedHair(this.hairstyles[this.currHairIndex]);

            if (this.currHairIndex > 0) 
            {
                this.currHairIndex--;
            }   
            else 
            {
                this.currHairIndex = this.hairstyles.length - 1;
            }
        }
        else if (this.assetType % 2 === 1)
        {

            if (this.currFit) 
            {
                this.removeFit('backward', this.currFit);
            }

            this.backwardClickedFit(this.dresses[this.currFitIndex]);

            if (this.currFitIndex > 0)
            {
                this.currFitIndex--;
            } 
            else
            {
                this.currFitIndex = this.dresses.length - 1;
            }
        }
    });
    
}

    update()
    {}

    forwardClickedHair(img) 
    {
        this.currHair = this.add.image(-650, 350, img);
        this.currHair.setScale(0.19);

        this.tweens.add({
                targets: this.currHair,
                x: 650,
                y: 350,
                duration: 150,
                ease: 'Linear',
    });
    }

    backwardClickedHair(img)
    {
        this.currHair = this.add.image(1950, 350, img);
        this.currHair.setScale(0.19);

        this.tweens.add({
                targets: this.currHair,
                x: 650,
                y: 350,
                duration: 150,
                ease: 'Linear',
        });
    }

    removeHairStyle(direction, img)
    {
        if (direction === 'forward')
        {
            this.tweens.add({
                targets: this.currHair,
                x: 1950,
                y: 350,
                duration: 150,
                ease: 'Linear',
            });
        }

        else if (direction === 'backward')
        {
            this.tweens.add({
                targets: this.currHair,
                x: -650,
                y: 350,
                duration: 150,
                ease: 'Linear',
            });
        }
    }

    
    forwardClickedFit(img) 
    {
        this.currFit = this.add.image(-650, 350, img);
        this.currFit.setScale(0.19);

        this.tweens.add({
                targets: this.currFit,
                x: 650,
                y: 350,
                duration: 150,
                ease: 'Linear',
    });
    }

    backwardClickedFit(img)
    {
        this.currFit = this.add.image(1950, 350, img);
        this.currFit.setScale(0.19);

        this.tweens.add({
                targets: this.currFit,
                x: 650,
                y: 350,
                duration: 150,
                ease: 'Linear',
        });
    }

    removeFit(direction, img)
    {
        if (direction === 'forward')
        {
            this.tweens.add({
                targets: this.currFit,
                x: 1950,
                y: 350,
                duration: 150,
                ease: 'Linear',
            });
        }

        else if (direction === 'backward')
        {
            this.tweens.add({
                targets: this.currFit,
                x: -650,
                y: 350,
                duration: 150,
                ease: 'Linear',
            });
        }
    }
}

class Scene5 extends Phaser.Scene {
    constructor() {
        super('Scene5');
    }

    preload()
    {
        this.load.path = 'assets/';
        this.load.image('creditsBackdrop', 'credits.png');
    }

    create()
    {
        this.creditsBackdrop = this.add.image(675, 350, 'creditsBackdrop');
        this.creditsBackdrop.setScale(0.3);

        this.textObject = this.add.text(800, 350, "Camera Sound Effect:\nMicrouzi900 - \nhttps://www.youtube.com/watch?v=iMI6yys_yKo",
            { font: '20px Arial', fill: '#fff' });

        this.textObject2 = this.add.text(800, 450, "Theme Music: \nsprings! - \nhttps://www.youtube.com/watch?v=HxkrFFhhgj\nY&list=RDHxkrFFhhgjY&start_radio=1",
            { font: '20px Arial', fill: '#fff' });
    }
}


let config = {
    type: Phaser.WEBGL,
    width: 1350,
    height: 715,
    backgroundColor: 0x00000,
    scene: [Scene1, Scene2, Scene3, Scene4,Scene5],
}

let game = new Phaser.Game(config);