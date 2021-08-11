const config=
{
    type:Phaser.AUTO,
    width:vw,
    height:vh,
    parent:'app',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_VERTICALLY
    },
  
    scene: [
        gameStart,
        gamePlay,
        gameQuestion,
        failGame,
        pass,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 550
            },
        },
    },
}
const game=new Phaser.Game(config);

